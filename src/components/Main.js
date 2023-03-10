import React, { useState } from 'react';
import { usePosts } from '../hooks/usePost';

import PostFilter from './PostFilter';
import PostList from './PostList';
import Popup from './Popup';
import PostForm from './PostForm';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const [filter, setFilter] = useState({ sort: '', query: '' });

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
