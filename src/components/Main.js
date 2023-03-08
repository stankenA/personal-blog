import React, { useState } from 'react';

import PostForm from './PostForm';
import PostList from './PostList';

import { initialPosts } from '../utils/constants';

export default function Main() {

  const [posts, setPosts] = useState(initialPosts);

  function addPost(newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button className="posts__button button">Create new post</button>
        <PostForm onAddPost={addPost} />
        {posts.length !== 0
          ? <PostList posts={posts} onPostRemove={removePost} />
          : <h2 className="posts__subtitle">No posts :&#40;</h2>
        }
      </section>
    </main>
  )
}
