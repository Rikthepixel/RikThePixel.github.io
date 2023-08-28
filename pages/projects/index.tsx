import matter from "gray-matter";
import fs from "node:fs/promises";
import Head from "next/head";
import React, { useEffect } from "react";
import path from "node:path";
import Button from "components/controls/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkButton from "components/controls/LinkButton";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import fadeAnim, { fadeTrans } from "anims/fade";
import useIsFirstRender from "hooks/useIsFirstRender";
import { PostBrief, SerializedPostBrief } from "models/blog/Post";
import useBlogPosts, { SortingKey } from "hooks/useBlogPosts";
import { capitalize } from "utils/string";
import { frontMatterSchema } from "validators/blog";
import { POST_EXT, POSTS_PATH, POST_IMAGE_PATH } from "config/blog";
import DotDivider from "components/DotDivider";

const SORTING_KEY_TO_SORTING_INFO = {
  newest: {
    label: "🌱 Newest",
    title: "Newest article",
  },
  oldest: {
    label: "🌳 Oldest",
    title: "Oldest article",
  },
  shortest: {
    label: "🐇 Shortest",
    title: "Shortest readtime",
  },
  longest: {
    label: "🐢 Longest",
    title: "Longest readtime",
  },
} satisfies Record<SortingKey, { label: string; title: string }>;

interface StaticProps {
  posts: SerializedPostBrief[];
}

export default function BlogIndex({ posts: serializedPosts }: StaticProps) {
  const { posts, sort, setSort, sortingKeys, search, setSearch, tag, setTag } =
    useBlogPosts(serializedPosts);

  const { query } = useRouter();

  useEffect(() => {
    if (typeof query.tag !== "string" && query.tag !== undefined) return;
    setTag(query.tag);
  }, [query.tag]);

  const reduceMotion = useReducedMotion();
  const isFirstRender = useIsFirstRender();

  const readtimeFormat = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "minute",
  });

  return (
    <>
      <Head>
        <title>Rik den Breejen | Blog</title>
      </Head>
      <div className="flex flex-1 flex-col overflow-auto md:overflow-clip">
        <h1
          id="page-header"
          className="w-full text-center text-4xl font-medium md:text-5xl mb-4"
        >
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[17rem_1fr] lg:grid-cols-[20rem_1fr] transition-all mx-auto gap-4 p-4 flex-1 w-full max-w-7xl">
          <aside className="relative w-full md:border-r-2 md:border-neutral-600/50 md:pr-2">
            <div className="sticky top-20 w-full flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-2">
                <p className="text-sm">Search:</p>
                <input
                  className="border-2 border-primary-900 rounded-md px-3 py-2 w-full bg-transparent focus-visible:outline focus-visible:outline-primary-contrast/25"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  placeholder="🔎 Search title & tags..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Sort by:</p>
                <div className="grid grid-cols-2 gap-2">
                  {sortingKeys.map((key, i) => {
                    const sortingInfo = SORTING_KEY_TO_SORTING_INFO[key];

                    return (
                      <Button
                        key={i}
                        variant={sort === key ? "contained" : "outlined"}
                        onClick={() => setSort(key)}
                        title={sortingInfo.title}
                      >
                        {sortingInfo.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <AnimatePresence>
                {tag && (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                    transition={fadeTrans}
                    variants={reduceMotion ? {} : fadeAnim}
                  >
                    <LinkButton
                      variant="outlined"
                      href="/blog"
                      className="block"
                    >
                      Clear {`"${capitalize(tag)}"`} tag filter
                    </LinkButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
          {posts.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-fit">
              <AnimatePresence>
                {posts.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    className={`flex flex-col rounded-md gap-2 w-full h-fit`}
                  >
                    <Link href={`/blog/${p.slug}`} className="rounded-md">
                      <img
                        className="aspect-video object-contain w-full rounded-md"
                        src={p.thumbnail}
                        width="1920"
                        height="1080"
                      />
                    </Link>
                    <div className="flex gap-1 overflow-auto py-1 -my-1">
                      {p.tags?.map((tag, tagIndex) => {
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
                    <Link
                      href={`/blog/${p.slug}`}
                      className="flex flex-col gap-2 rounded-md"
                    >
                      <div className="text-xl font-semibold">{p.title}</div>
                      <div className="line-clamp-3 break-words flex-1 text-primary-contrast-low">
                        {p.excerpt}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-primary-contrast-low">
                        {isFirstRender
                          ? p.date.toDateString()
                          : p.date.toLocaleDateString()}
                        <DotDivider />
                        {isFirstRender
                          ? `${p.readtime} min read`
                          : `${readtimeFormat.format(p.readtime)} read`}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <p role="note" className="w-full text-center">
              No blog posts found with {`"${search}"`} in the title or tags
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await Promise.all(
    await fs.readdir(POSTS_PATH, { withFileTypes: true }).then((dirents) =>
      dirents
        .filter((d) => d.isFile() && d.name.endsWith(POST_EXT))
        .map<Promise<PostBrief>>(async (dirent) => {
          const fileContent = await fs.readFile(
            path.resolve(POSTS_PATH, dirent.name),
          );

          const { data: unvalidatedFrontMatter, excerpt } = matter(
            fileContent.toString(),
            { excerpt: true },
          );

          if (!excerpt)
            throw new Error(`Excerpt is missing from file: ${dirent.name}`);

          const frontMatter = frontMatterSchema.parse(unvalidatedFrontMatter);
          const slug = dirent.name.replace(RegExp(`(${POST_EXT})$`), "");

          return {
            title: frontMatter.title,
            slug: slug,
            readtime: frontMatter.readtime,
            thumbnail: path.join(POST_IMAGE_PATH, slug, frontMatter.thumbnail),
            banner: path.join(POST_IMAGE_PATH, slug, frontMatter.banner),
            tags: frontMatter.tags,
            date: frontMatter.date,
            excerpt: excerpt.substring(0, 200),
          };
        }),
    ),
  ).then((posts) =>
    posts
      .sort((a, b) => {
        const dateDelta = a.date.getTime() - b.date.getTime();
        if (dateDelta !== 0) return dateDelta;
        return a.title.localeCompare(b.title);
      })
      .map<SerializedPostBrief>((post) => ({
        ...post,
        date: post.date.toUTCString(),
      })),
  );

  const props: StaticProps = {
    posts,
  };

  return {
    props,
  };
};
