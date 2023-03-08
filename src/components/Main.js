import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);

  function addPost(post) {
    setPosts([...posts, post])
  }

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button className="posts__button button">Create new post</button>
        <PostForm onAddPost={addPost} />
        <div className="posts__container">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
