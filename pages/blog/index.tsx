import matter from "gray-matter";
import fs from "node:fs/promises";
import Head from "next/head";
import React, { useMemo, useState } from "react";
import path from "node:path";
import { z } from "zod";
import Button from "components/controls/Button";
import { Search as Searcher } from "js-search";
import Link from "next/link";
import { useRouter } from "next/router";
import LinkButton from "components/controls/LinkButton";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import fadeAnim, { fadeTrans } from "anims/fade";
import useIsFirstRender from "hooks/useIsFirstRender";

interface PostBrief {
  id: number;
  title: string;
  slug: string;
  readtime: number;
  thumbnail: string;
  excerpt: string;
  tags?: string[];
  date: Date;
}

interface SerializedPostBrief extends Omit<PostBrief, "date"> {
  date: string;
}

interface StaticProps {
  posts: SerializedPostBrief[];
}

const SORTINGS = {
  newest(a: PostBrief, b: PostBrief) {
    const deltaTime = a.date.getTime() - b.date.getTime();
    if (deltaTime !== 0) return deltaTime;
    return a.id - b.id;
  },

  oldest(a: PostBrief, b: PostBrief) {
    const deltaTime = b.date.getTime() - a.date.getTime();
    if (deltaTime !== 0) return deltaTime;
    return b.id - a.id;
  },
} as const;

const capitalize = (str: string) => {
  const firstLetter = str.length > 0 ? str[0].toUpperCase() : "";
  const rest = str.length >= 2 ? str.substring(1) : "";

  return firstLetter + rest;
};

export default function BlogIndex({ posts: serializedPosts }: StaticProps) {
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [search, setSearch] = useState<string>("");
  const { query } = useRouter();
  const reduceMotion = useReducedMotion();
  const isFirstRender = useIsFirstRender();

  const searcher = useMemo(() => {
    const searcher = new Searcher("id");
    searcher.addIndex("title");
    searcher.addIndex("tags");
    searcher.addDocuments(serializedPosts);
    return searcher;
  }, [serializedPosts]);

  const posts = useMemo(() => {
    let filteredPosts =
      search !== ""
        ? (searcher.search(search) as SerializedPostBrief[])
        : serializedPosts;

    if (typeof query.tag === "string") {
      const searchTag = query.tag.toLowerCase();

      filteredPosts = filteredPosts.filter(
        (p) => p.tags?.includes(searchTag) ?? true,
      );
    }

    return filteredPosts
      .map<PostBrief>((p) => ({ ...p, date: new Date(p.date) }))
      .sort(SORTINGS[sort]);
  }, [serializedPosts, sort, search, query.tag, searcher]);

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
          className="text-center text-4xl font-medium md:text-5xl mb-4"
        >
          Blog
        </h1>
        <div className="grid md:grid-cols-[300px_1fr] mx-auto gap-4 p-4 flex-1 w-full max-w-7xl">
          <aside className="flex flex-col gap-4 flex-1 md:border-r-2 md:border-neutral-600/50 md:pr-2">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Search:</p>
              <input
                className="border-2 border-primary-900 rounded-md px-3 py-2 w-full bg-transparent focus-visible:outline focus-visible:outline-primary-contrast/25"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search title & tags..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Sort by:</p>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={sort === "newest" ? "contained" : "outlined"}
                  onClick={() => setSort("newest")}
                >
                  Newest
                </Button>
                <Button
                  variant={sort === "oldest" ? "contained" : "outlined"}
                  onClick={() => setSort("oldest")}
                >
                  Oldest
                </Button>
              </div>
            </div>
            <AnimatePresence>
              {typeof query.tag === "string" && (
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                  transition={fadeTrans}
                  variants={reduceMotion ? {} : fadeAnim}
                >
                  <LinkButton variant="outlined" href="/blog" className="block">
                    Clear {`"${capitalize(query.tag)}"`} tag filter
                  </LinkButton>
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
          {posts.length > 0 ? (
            <div className="flex flex-wrap h-fit md:overflow-auto">
              <AnimatePresence>
                {posts.map((p) => (
                  <motion.div
                    key={p.slug}
                    layout
                    className={`flex flex-col rounded-md gap-2 w-full p-4 sm:w-1/2 lg:w-1/3 h-fit`}
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
                        <div className="w-1 h-1 rounded-full bg-primary-contrast-low" />
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
              No blog posts found with {'"'}
              {search}
              {'"'} in the title or tags
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const frontMatterSchema = z.object({
    title: z.string(),
    thumbnail: z.string(),
    readtime: z.coerce.number(),
    date: z.coerce.date(),
    tags: z.array(z.coerce.string()).optional(),
  });

  const postsPath = path.resolve(process.cwd(), "./res/posts/");
  const postNameFormat = /(\d+)-(.+)(\.md[x]*)$/;

  const posts = await Promise.all(
    await fs.readdir(postsPath, { withFileTypes: true }).then((dirents) =>
      dirents
        .filter((d) => d.isFile() && d.name.match(postNameFormat))
        .map<Promise<PostBrief>>(async (dirent) => {
          const direntMatches = dirent.name.match(postNameFormat);
          const unvalidatedId = direntMatches?.[1];
          const slugPart = direntMatches?.[2];

          const id = z.coerce.number().int().parse(unvalidatedId);

          const fileContent = await fs.readFile(
            path.resolve(postsPath, dirent.name),
          );

          const { data: unvalidatedFrontMatter, excerpt } = matter(
            fileContent.toString(),
            { excerpt: true },
          );

          if (!excerpt)
            throw new Error(`Excerpt is missing from file: ${dirent.name}`);

          const frontMatter = frontMatterSchema.parse(unvalidatedFrontMatter);

          return {
            id: id,
            title: frontMatter.title,
            slug: `${id}-${slugPart}`,
            readtime: frontMatter.readtime,
            thumbnail: path.join("images", "posts", frontMatter.thumbnail),
            tags: frontMatter.tags,
            date: frontMatter.date,
            excerpt: excerpt.substring(0, 200),
          };
        }),
    ),
  ).then((posts) =>
    posts
      .sort((a, b) => {
        const idDelta = a.id - b.id;
        if (idDelta !== 0) return idDelta;

        const dateDelta = a.date.getTime() - b.date.getTime();
        if (dateDelta !== 0) return dateDelta;

        return a.title.localeCompare(b.title);
      })
      .map<SerializedPostBrief>((p) => ({
        ...p,
        date: p.date.toUTCString(),
      })),
  );

  const props: StaticProps = {
    posts,
  };

  return {
    props,
  };
};
