import { MDXRemote } from "next-mdx-remote";

import fs from "node:fs/promises";
import { makePostFromFile, SerializedPost } from "models/blog/Post";

import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { POST_EXT, POSTS_PATH, POST_IMAGE_PATH } from "config/blog";
import useIsFirstRender from "hooks/useIsFirstRender";
import useBlogPost from "hooks/useBlogPost";
import DotDivider from "components/DotDivider";
import rikSquarePic from "res/images/graphics/rik-square.webp";
import { capitalize } from "utils/string";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { NextSeo } from "next-seo";
import Markdown from "components/layout/Markdown";
import { useMemo } from "react";

interface StaticProps {
  post: SerializedPost;
  imageUrl: string
}

export default function BlogPage({ post: serializedPost, imageUrl }: StaticProps) {
  const isFirstRender = useIsFirstRender();
  const readtimeFormat = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "minute",
  });

  const post = useBlogPost(serializedPost);


  const mdxComponents = useMemo(() => {
    return {
      SyntaxHighlighter,
      ...Markdown,
    };
  }, []);

  return (
    <>
      <NextSeo
        title={`Rik den Breejen | ${post.title}`}
        description={post.excerpt}
        openGraph={{
          type: "article",
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.thumbnail,
              alt: post.thumbnail_alt,
            },
          ],
          article: {
            tags: post.tags ?? undefined,
            authors: ["Rik den Breejen"],
            section: post.section ?? undefined,
            publishedTime: post.date.toUTCString(),
          },
        }}
      />
      <article className="flex flex-col gap-4 mx-auto w-full max-w-4xl rounded-md p-8 mb-16">
        <img
          className="aspect-[16/7] w-full rounded-md object-cover"
          src={post.banner}
          alt={post.thumbnail_alt}
        />
        <div className="flex flex-col gap-4">
          <h1
            id="page-header"
            className="font-semibold text-center text-5xl sm:text-6xl"
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-primary-contrast-low">
            <div className="flex gap-2 items-center">
              <img
                className="object-cover aspect-square rounded-full w-8 h-8"
                src={rikSquarePic.src}
                width={rikSquarePic.width}
                height={rikSquarePic.height}
                alt="author"
              />
              <span aria-label="article-author" itemProp="author">
                Rik den Breejen
              </span>
            </div>
            <DotDivider />
            <span className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <time
                aria-label="Date created"
                dateTime={post.date.toUTCString()}
              >
                {isFirstRender
                  ? post.date.toDateString()
                  : post.date.toLocaleDateString()}
              </time>
            </span>
            <DotDivider />
            <span className="flex items-center gap-2">
              <span className="text-xl">📖</span>
              <time
                aria-label="article reading time"
                dateTime={`${post.readtime} minutes`}
              >
                {isFirstRender
                  ? `${post.readtime} min read`
                  : `${readtimeFormat.format(post.readtime)} read`}
              </time>
            </span>
          </div>

          <div className="flex flex-col gap-8 text-lg">
            <MDXRemote
              {...post.content}
              components={mdxComponents}
              scope={{ imageUrl }}
            />
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
  return {
    paths: await Promise.all(
      await fs.readdir(POSTS_PATH, { withFileTypes: true }).then((dirents) =>
        dirents
          .filter((d) => d.isFile() && d.name.endsWith(POST_EXT))
          .map<{ params: { slug: string } }>((dirent) => ({
            params: {
              slug: dirent.name.replace(RegExp(`(${POST_EXT})$`), ""),
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
  const filePath = path.resolve(POSTS_PATH, `${params.slug}${POST_EXT}`);
  const post = await makePostFromFile(filePath, POST_IMAGE_PATH);
  
  const props: StaticProps = {
    post: {
      ...post,
      date: post.date.toUTCString(),
    },
    imageUrl: path.join(POST_IMAGE_PATH, post.slug)
  }

  return {
    props
  };
};
