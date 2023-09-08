import DotDivider from "components/DotDivider";
import { motion } from "framer-motion";
import useIsFirstRender from "hooks/useIsFirstRender";
import { PostBrief } from "models/blog/Post";
import Link from "next/link";
import { capitalize } from "utils/string";

interface PostItemProps {
  post: PostBrief;
}

const READTIME_FORMAT = new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "minute",
});

export default function PostItem({ post }: PostItemProps) {
  const isFirstRender = useIsFirstRender();

  return (
    <motion.div layout className="flex flex-col rounded-md gap-2 w-full h-fit">
      <Link href={`/blog/${post.slug}`} className="rounded-md">
        <img
          className="aspect-video object-contain w-full rounded-md"
          src={post.thumbnail}
          width="1920"
          height="1080"
        />
      </Link>
      <div className="flex gap-1 overflow-auto py-1 -my-1">
        {post.tags?.map((tag, tagIndex) => {
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
        href={`/blog/${post.slug}`}
        className="flex flex-col gap-2 rounded-md"
      >
        <div className="text-xl font-semibold">{post.title}</div>
        <div className="line-clamp-4 break-words flex-1 text-primary-contrast-low">
          {post.excerpt}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-primary-contrast-low">
          {isFirstRender
            ? post.date.toDateString()
            : post.date.toLocaleDateString()}
          <DotDivider />
          {isFirstRender
            ? `${post.readtime} min read`
            : `${READTIME_FORMAT.format(post.readtime)} read`}
        </div>
      </Link>
    </motion.div>
  );
}
