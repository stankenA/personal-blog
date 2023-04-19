import React, { useState, useEffect } from 'react';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';

import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import Popup from '../components/Popup';
import PostForm from '../components/PostForm';
import Pagination from '../components/Pagination';

import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import { HashLink as Link } from 'react-router-hash-link';

export default function PostPage() {

  const [posts, setPosts] = useState([]);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [buttonOpen, setButtonOpen] = useState(false);

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

  function changeButtonState() {
    setButtonOpen(!buttonOpen);
  }

  return (
    <main className="content">
      <section className="banner" id="banner">
        <div className="banner__content">
          <h1 className="banner__title">Entrust your site to developer</h1>
          <p className="banner__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus provident
            molestiae, est similique, adipisci debitis dicta perspiciatis quia suscipit animi
            reprehenderit accusamus nam eius placeat, dolorem eum mollitia sapiente.
          </p>
          <button className={`banner__button button ${buttonOpen ? 'banner__button_open' : ''}`} onClick={changeButtonState}>
            {buttonOpen ? `You're breathtaking!` : 'Push me!'}
          </button>
        </div>
      </section>
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
        <PostForm onAddPost={addPost} postId={posts.length + 1} />
      </Popup>
      <Link to="#banner" className="posts__up button">Go up</Link>
    </main>
  )
}
