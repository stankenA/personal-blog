import React, { useState, useMemo } from 'react';

import PostList from './PostList';
import DropdownMenu from './DropdownMenu';
import Popup from './Popup';
import PostForm from './PostForm';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  // Колбэк будет вызван только в том случае, если какой-либо депс поменяет своё значение
  // В нашем случае необходимо следить за изменением алгоритма сортировки и массива постов
  const sortedPosts = useMemo(() => {

    // Проверяем, был ли сортирован массив
    // P.S. Сделано это потому, что изначальный стейт selectedSort равен пустой строке.
    // При попытке передать его функции localeCompare она не отработает

    console.log('Отраб')

    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort.toLowerCase()].localeCompare(b[selectedSort.toLowerCase()]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

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

  function sortPosts(sort) {
    setSelectedSort(sort);
  }

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button type="button" className="posts__button button" onClick={openPopup}>Create new post</button>
        <div className="posts__search-container">
          <DropdownMenu onSort={sortPosts} />
          <label htmlFor="search" className="posts__search-label">Search</label>
          <div className="posts__search-input">
            <input
              name="search"
              type="text"
              className="posts__search"
              placeholder="Search..."
              value={searchQuery}
              onChange={evt => setSearchQuery(evt.target.value)}
            />
          </div>
        </div>
        <div className="posts__container">
          {sortedAndSearchedPosts.length !== 0
            ? <PostList posts={sortedAndSearchedPosts} onPostRemove={removePost} />
            : <h2 className="posts__subtitle">{`No posts? ( ͠° ͟ʖ ͡°)`}</h2>
          }
        </div>
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} />
      </Popup>
    </main>
  )
}
