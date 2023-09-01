import { POST_EXT, POST_IMAGE_PATH } from "config/blog";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "node:fs/promises";
import path from "node:path";
import { frontMatterSchema } from "validators/blog";

export interface BasePost {
  title: string;
  slug: string;
  readtime: number;
  thumbnail: string;
  thumbnail_alt: string;
  banner: string;
  excerpt: string;
  tags?: string[] | null;
  section?: string | null;
  date: Date;
}

export interface Post extends BasePost {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
}

export interface SerializedPost extends Omit<Post, "date"> {
  date: string;
}

export interface PostBrief extends BasePost {}

export interface SerializedPostBrief extends Omit<PostBrief, "date"> {
  date: string;
}

async function parsePostFile(filePath: string) {
  const fileContent = await fs.readFile(filePath);
  const basename = path.basename(filePath);
  const slug = basename.replace(RegExp(`(${POST_EXT})$`), "");

  const {
    data: unvalidatedFrontMatter,
    content,
    excerpt,
  } = matter(fileContent.toString(), { excerpt: true });

  if (!excerpt) throw new Error(`Excerpt is missing from slug: ${slug}`);

  const frontMatter = frontMatterSchema.parse(unvalidatedFrontMatter);

  return {
    frontMatter,
    slug,
    content: content.substring(content.indexOf("---") + 3),
    excerpt: excerpt.substring(0, excerpt.length > 200 ? 200 : excerpt.length),
  };
}

export async function makePostFromFile(filePath: string): Promise<Post> {
  const { slug, frontMatter, content, excerpt } = await parsePostFile(filePath);
  const mdxSource = await serialize(content, { parseFrontmatter: false });

  return {
    title: frontMatter.title,
    slug: slug,
    readtime: frontMatter.readtime,
    thumbnail: path.join(POST_IMAGE_PATH, slug, frontMatter.thumbnail),
    thumbnail_alt: frontMatter.thumbnail_alt,
    banner: path.join(POST_IMAGE_PATH, slug, frontMatter.banner),
    tags: frontMatter.tags ? frontMatter.tags : null,
    section: frontMatter.section ? frontMatter.section : null,
    date: frontMatter.date,
    content: mdxSource,
    excerpt: excerpt,
  };
}

export async function makePostBriefFromFile(
  filePath: string,
): Promise<PostBrief> {
  const { slug, frontMatter, excerpt } = await parsePostFile(filePath);

  return {
    title: frontMatter.title,
    slug: slug,
    readtime: frontMatter.readtime,
    thumbnail: path.join(POST_IMAGE_PATH, slug, frontMatter.thumbnail),
    thumbnail_alt: frontMatter.thumbnail_alt,
    banner: path.join(POST_IMAGE_PATH, slug, frontMatter.banner),
    tags: frontMatter.tags ? frontMatter.tags : null,
    section: frontMatter.section ? frontMatter.section : null,
    date: frontMatter.date,
    excerpt: excerpt
  };
}
