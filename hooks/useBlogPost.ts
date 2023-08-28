import { Post, SerializedPost } from "models/blog/Post";
import { useMemo } from "react";

export default function useBlogPost(serializedPost: SerializedPost) {
  const post = useMemo<Post>(() => {
    return {
      ...serializedPost,
      date: new Date(serializedPost.date)
    }
  }, [serializedPost])

  return post
}
