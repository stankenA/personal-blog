import React, { useState, useEffect, useMemo } from 'react';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';

import PostFilter from './PostFilter';
import PostList from './PostList';
import Popup from './Popup';
import PostForm from './PostForm';
import Pagination from './Pagination';

import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';

export default function Main() {

  const [posts, setPosts] = useState([]);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  // Этот кастомный хук необходим для часто встречающихся задач:
  // 1. Показывать индикатор загрузки при различных запросах
  // 2. Обработать ошибку запроса
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    // Достаём общее количество постов с бэка и устанавливаем общее количество страниц
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts();
  }, [page])

  // Данный хук возвращает отсортированные и отфильтрованные посты
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function addPost(newPost) {
    setPosts([...posts, newPost]);
    setIsPopupOpened(false);
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  function openPopup() {
    setIsPopupOpened(true);
  }

  function closePopup() {
    setIsPopupOpened(false);
  }

  function changePage(page) {
    setPage(page);
  }

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button type="button" className="posts__button button" onClick={openPopup}>Create new post</button>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {postError &&
          <h2 className="posts__subtitle">Oops! Something went wrong: {postError}</h2>
        }
        {isPostsLoading
          ? <span className="posts__loader"></span>
          : <PostList posts={sortedAndSearchedPosts} onPostRemove={removePost} />
        }
        <Pagination
          page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} />
      </Popup>
      <button type="button" className="posts__up button">Go up</button>
    </main>
  )
}
