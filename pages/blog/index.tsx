import fs from "node:fs/promises";
import React, { useEffect, useMemo } from "react";
import path from "node:path";
import Button from "components/controls/Button";
import { useRouter } from "next/router";
import LinkButton from "components/controls/LinkButton";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import fadeAnim, { fadeTrans } from "anims/fade";
import {
  makePostBriefFromFile,
  PostBrief,
  SerializedPostBrief,
} from "models/blog/Post";
import useBlogPosts, { SortingKey } from "hooks/useBlogPosts";
import { capitalize } from "utils/string";
import { POST_EXT, POSTS_PATH, POST_IMAGE_PATH } from "config/blog";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import PostItem from "components/pages/blog/[slug]/PostItem";

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
  const reduceMotion = useReducedMotion();
  const { query } = useRouter();

  const { posts, sort, setSort, sortingKeys, search, setSearch, tag, setTag } =
    useBlogPosts(serializedPosts);

  useEffect(() => {
    if (typeof query.tag !== "string" && query.tag !== undefined) return;
    setTag(query.tag);
  }, [query.tag]);

  const renderedSortingButtons = useMemo(
    () =>
      sortingKeys.map((key, i) => {
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
      }),
    [sort, setSort, sortingKeys],
  );

  return (
    <>
      <NextSeo
        title="Rik den Breejen | Blog"
        openGraph={{
          title: "Rik den Breejen | Blog",
          description:
            "Follow me and explore some of the things I am passionate about",
        }}
        description="Follow me and explore some of the things I am passionate about"
      />
      <div className="flex flex-1 flex-col overflow-auto md:overflow-clip">
        <Header.H1 id="page-header" className="w-full text-center mb-4">
          Blog
        </Header.H1>
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
                  {renderedSortingButtons}
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
                      {`Clear "${capitalize(tag)}" tag filter`}
                    </LinkButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
          {posts.length > 0 ? (
            <div className="w-full grid grid-cols-1  lg:grid-cols-2 gap-8 h-fit">
              <AnimatePresence>
                {posts.map((p) => (
                  <PostItem key={p.slug} post={p} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <p role="note" className="w-full text-center">
              {`No blog posts found with "${search}" in the title or tags`}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const dirents = await fs.readdir(POSTS_PATH, { withFileTypes: true });

  const posts = await Promise.all(
    dirents
      .filter((d) => d.isFile() && d.name.endsWith(POST_EXT))
      .map<Promise<PostBrief>>(
        async (dirent) =>
          await makePostBriefFromFile(
            path.resolve(POSTS_PATH, dirent.name),
            POST_IMAGE_PATH,
          ),
      ),
  );

  posts.sort((a, b) => {
    const dateDelta = a.date.getTime() - b.date.getTime();
    if (dateDelta !== 0) return dateDelta;
    return a.title.localeCompare(b.title);
  });

  const props: StaticProps = {
    posts: posts.map<SerializedPostBrief>((p) => ({
      ...p,
      date: p.date.toUTCString(),
    })),
  };

  return {
    props,
  };
};
