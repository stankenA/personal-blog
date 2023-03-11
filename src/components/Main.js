import React, { useState, useEffect } from 'react';
import { usePosts } from '../hooks/usePost';

import PostFilter from './PostFilter';
import PostList from './PostList';
import Popup from './Popup';
import PostForm from './PostForm';

import PostService from '../API/PostService';

export default function Main() {

  const [posts, setPosts] = useState([]);
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [isPostsLoading, setIsPostsLoading] = useState(false);

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

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostsLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button type="button" className="posts__button button" onClick={openPopup}>Create new post</button>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        {isPostsLoading
          ? <span className="posts__loader"></span>
          : <PostList posts={sortedAndSearchedPosts} onPostRemove={removePost} />
        }
      </section>
      <Popup isOpened={isPopupOpened} onClose={closePopup}>
        <PostForm onAddPost={addPost} />
      </Popup>
      <button type="button" className="posts__up button">Go up</button>
    </main>
  )
}
