import { MDXRemoteSerializeResult } from "next-mdx-remote";

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
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}

export interface SerializedPost extends Omit<Post, "date"> {
  date: string;
}

export interface PostBrief extends BasePost {
}

export interface SerializedPostBrief extends Omit<PostBrief, "date"> {
  date: string;
}
