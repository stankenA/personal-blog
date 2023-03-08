import React, { useState } from 'react';

import PostForm from './PostForm';
import Post from './Post';
import PostList from './PostList';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);

  function addPost(newPost) {
    setPosts([...posts, newPost])
  }

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button className="posts__button button">Create new post</button>
        <PostForm onAddPost={addPost} />
        <PostList posts={posts} />
      </section>
    </main>
  )
}
