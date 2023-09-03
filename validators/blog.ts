import { z } from "zod";

export const frontMatterSchema = z.object({
  title: z.string(),
  thumbnail: z.string(),
  thumbnail_alt: z.string(),
  banner: z.string(),
  readtime: z.coerce.number(),
  date: z.coerce.date(),
  tags: z.array(z.coerce.string()).optional(),
  section: z.coerce.string().optional(),
  excerpt: z.coerce.string()
});
