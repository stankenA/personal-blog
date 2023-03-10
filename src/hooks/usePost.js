import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
  const sortedPosts = useMemo(() => {

    // Проверяем, был ли сортирован массив
    // P.S. Сделано это потому, что изначальный стейт sort равен пустой строке.
    // При попытке передать его функции localeCompare она не отработает

    if (sort) {
      return [...posts].sort((a, b) => a[sort.toLowerCase()].localeCompare(b[sort.toLowerCase()]))
    }
    return posts;
  }, [sort, posts])

  return sortedPosts;
}

export function usePosts(posts, sort, query) {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts;
}
