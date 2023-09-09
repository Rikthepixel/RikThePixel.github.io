import { POST_EXT, POST_IMAGE_PATH } from "config/blog";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "node:fs/promises";
import path from "node:path";
import remarkGfm from "remark-gfm";
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

  const mdxSource = await serialize(fileContent.toString(), {
    parseFrontmatter: true,
    mdxOptions: { remarkPlugins: [remarkGfm] },
    scope: { 
      imageUrl: path.join(POST_IMAGE_PATH, slug)
    }
  });

  const frontMatter = frontMatterSchema.parse(mdxSource.frontmatter);

  return {
    frontMatter,
    slug,
    source: { scope: mdxSource.scope, compiledSource: mdxSource.compiledSource, frontmatter: {} },
  };
}

export async function makePostFromFile(
  filePath: string,
  imageUrl: string,
): Promise<Post> {
  const { slug, frontMatter, source } = await parsePostFile(filePath);
  
  return {
    title: frontMatter.title,
    slug: slug,
    readtime: frontMatter.readtime,
    thumbnail: path.join(imageUrl, slug, frontMatter.thumbnail),
    thumbnail_alt: frontMatter.thumbnail_alt,
    banner: path.join(imageUrl, slug, frontMatter.banner),
    tags: frontMatter.tags ? frontMatter.tags : null,
    section: frontMatter.section ? frontMatter.section : null,
    date: frontMatter.date,
    excerpt: frontMatter.excerpt,
    content: source
  };
}

export async function makePostBriefFromFile(
  filePath: string,
  imageUrl: string,
): Promise<PostBrief> {
  const { slug, frontMatter} = await parsePostFile(filePath);

  return {
    title: frontMatter.title,
    slug: slug,
    readtime: frontMatter.readtime,
    thumbnail: path.join(imageUrl, slug, frontMatter.thumbnail),
    thumbnail_alt: frontMatter.thumbnail_alt,
    banner: path.join(imageUrl, slug, frontMatter.banner),
    tags: frontMatter.tags ? frontMatter.tags : null,
    section: frontMatter.section ? frontMatter.section : null,
    date: frontMatter.date,
    excerpt: frontMatter.excerpt,
  };
}
