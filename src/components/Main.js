import React, { useState } from 'react';

import PostList from './PostList';
import DropdownMenu from './DropdownMenu';
import Popup from './Popup';
import PostForm from './PostForm';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

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
        <button className="posts__button button" onClick={openPopup}>Create new post</button>
        <DropdownMenu />
        {posts.length !== 0
          ? <PostList posts={posts} onPostRemove={removePost} />
          : <h2 className="posts__subtitle">No posts :&#40;</h2>
        }
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} />
      </Popup>
    </main>
  )
}
