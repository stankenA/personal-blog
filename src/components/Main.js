import React, { useState, useMemo } from 'react';

import PostFilter from './PostFilter';
import PostList from './PostList';
import Popup from './Popup';
import PostForm from './PostForm';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {

    // Проверяем, был ли сортирован массив
    // P.S. Сделано это потому, что изначальный стейт selectedSort равен пустой строке.
    // При попытке передать его функции localeCompare она не отработает

    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort.toLowerCase()].localeCompare(b[filter.sort.toLowerCase()]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

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
    setIsPopupOpened(false)
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
        <PostList posts={sortedAndSearchedPosts} onPostRemove={removePost} />
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} />
      </Popup>
    </main>
  )
}
