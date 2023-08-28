import { PostBrief, SerializedPostBrief } from "models/blog/Post";
import { useMemo, useState } from "react";
import { Search as Searcher } from "js-search";

const SORTING_KEYS = ["newest", "oldest", "longest", "shortest"] as const;

export type SortingKey = (typeof SORTING_KEYS)[number];
export type SortingMethod<T> = (a: T, b: T) => number;

const SORTINGS = {
  newest(a: PostBrief, b: PostBrief) {
    const deltaTime = a.date.getTime() - b.date.getTime();
    if (deltaTime !== 0) return deltaTime;
    return a.title.localeCompare(b.title);
  },

  oldest(a: PostBrief, b: PostBrief) {
    const deltaTime = b.date.getTime() - a.date.getTime();
    if (deltaTime !== 0) return deltaTime;
    return b.title.localeCompare(a.title);
  },

  longest(a: PostBrief, b: PostBrief) {
    const deltaReadtime = b.readtime - a.readtime;
    if (deltaReadtime !== 0) return deltaReadtime;
    return a.title.localeCompare(b.title);
  },

  shortest(a: PostBrief, b: PostBrief) {
    const deltaReadtime = a.readtime - b.readtime;
    if (deltaReadtime !== 0) return deltaReadtime;
    return b.title.localeCompare(a.title);
  },
} satisfies Record<SortingKey, SortingMethod<PostBrief>>;

export default function useBlogPosts(serializedPosts: SerializedPostBrief[]) {
  const [sort, setSort] = useState<SortingKey>("newest");
  const [search, setSearch] = useState<string>("");
  const [tag, setTag] = useState<string | undefined>(undefined);

  const mappedPosts = useMemo(() => {
    return serializedPosts.map<PostBrief>((p) => ({
      ...p,
      date: new Date(p.date),
    }));
  }, [serializedPosts]);

  const searcher = useMemo(() => {
    const searcher = new Searcher("id");
    searcher.addIndex("title");
    searcher.addIndex("tags");
    searcher.addDocuments(mappedPosts);
    return searcher;
  }, [mappedPosts]);

  const posts = useMemo(() => {
    let filteredPosts =
      search !== "" ? (searcher.search(search) as PostBrief[]) : mappedPosts;

    if (typeof tag === "string") {
      const searchTag = tag.toLowerCase();

      filteredPosts = filteredPosts.filter(
        (p) => p.tags?.includes(searchTag) ?? true,
      );
    }

    return filteredPosts.sort(SORTINGS[sort]);
  }, [mappedPosts, sort, search, tag, searcher]);

  return {
    sort,
    setSort,
    sortingKeys: SORTING_KEYS,
    search,
    setSearch,
    tag,
    setTag,
    posts,
  };
}
