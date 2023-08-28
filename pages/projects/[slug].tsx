import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import fs from "node:fs/promises";
import { SerializedPost } from "models/blog/Post";

import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import { frontMatterSchema } from "validators/blog";
import { PROJECT_EXT, PROJECTS_PATH, PROJECT_IMAGE_PATH } from "config/projects";
import useIsFirstRender from "hooks/useIsFirstRender";
import useBlogPost from "hooks/useBlogPost";
import DotDivider from "components/DotDivider";
import rikSquarePic from "res/images/graphics/rik-square.webp";
import { capitalize } from "utils/string";
import Link from "next/link";
import SyntaxHighlighter from 'react-syntax-highlighter'

interface StaticProps {
  post: SerializedPost;
}

export default function BlogPage({ post: serializedPost }: StaticProps) {
  const isFirstRender = useIsFirstRender();
  const post = useBlogPost(serializedPost);

  const readtimeFormat = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "minute",
  });

  return (
    <>
      <Head>
        <title>Rik den Breejen | {post.title}</title>
      </Head>
      <article className="mx-auto w-full max-w-4xl rounded-md bg-primary-200 mb-16">
        <img className="aspect-video w-full rounded-md" src={post.thumbnail} />
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-primary-contrast-low">
            <div className="flex gap-2 items-center">
              <img
                className="object-cover aspect-square rounded-full w-8 h-8"
                src={rikSquarePic.src}
                width={rikSquarePic.width}
                height={rikSquarePic.height}
              />
              Rik den Breejen
            </div>
            <DotDivider />
            <span>
              <span className="text-xl">📅</span>
              {isFirstRender
                ? post.date.toDateString()
                : post.date.toLocaleDateString()}
            </span>
            <DotDivider />
            <span>
              <span className="text-xl">📖</span>
              {isFirstRender
                ? `${post.readtime} min read`
                : `${readtimeFormat.format(post.readtime)} read`}
            </span>
          </div>
          <h1 id="page-header" className="font-semibold text-5xl sm:text-6xl">
            {post.title}
          </h1>

          <div>
            <MDXRemote {...post.content} components={{ SyntaxHighlighter }} />
          </div>

          {post.tags && (
            <div className="border-t border-t-primary-contrast-low pt-4 flex flex-wrap gap-1">
              {post.tags.map((tag, tagIndex) => {
                const searchParams = new URLSearchParams();
                searchParams.append("tag", tag.toLowerCase());

                return (
                  <Link
                    key={tagIndex}
                    href={`/blog?${searchParams.toString()}`}
                    className="text-sm border-2 border-primary-900 rounded-md p-1"
                  >
                    {capitalize(tag)}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postExt = /(\.mdx)$/;

  return {
    paths: await Promise.all(
      await fs.readdir(PROJECTSS_PATH, { withFileTypes: true }).then((dirents) =>
        dirents
          .filter((d) => d.isFile() && d.name.endsWith(PROJECT_EXT))
          .map<{ params: { slug: string } }>((dirent) => ({
            params: {
              slug: dirent.name.replace(postExt, ""),
            },
          })),
      ),
    ),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{}, { slug: string }> = async ({
  params,
}) => {
  if (!params) throw new Error("Params was undefined");
  const filePath = path.resolve(PROJECTSS_PATH, `${params.slug}${PROJECT_EXT}`);
  const fileContent = await fs.readFile(filePath);

  console.log(fileContent.toString());

  const { data: unvalidatedFrontMatter, content } = matter(
    fileContent.toString(),
    { excerpt: true },
  );

  const frontMatter = frontMatterSchema.parse(unvalidatedFrontMatter);
  const mdxSource = await serialize(content, { parseFrontmatter: false });

  const props: StaticProps = {
    post: {
      title: frontMatter.title,
      slug: params.slug,
      readtime: frontMatter.readtime,
      thumbnail: path.join(PROJECT_IMAGE_PATH, params.slug, frontMatter.thumbnail),
      banner: path.join(PROJECT_IMAGE_PATH, params.slug, frontMatter.banner),
      tags: frontMatter.tags,
      date: frontMatter.date.toUTCString(),
      content: mdxSource,
    },
  };

  return {
    props,
  };
};
