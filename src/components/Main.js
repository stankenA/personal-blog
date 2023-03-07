import React from 'react';
import PostForm from './PostForm';
import Post from './Post';

export default function Main() {
  return (
    <main className="content">
      <section className="posts">
        <h2 className="posts__title">Make your story.</h2>
        <button className="posts__button button">Create new post</button>
        <PostForm />
        <div className="posts__container">
          <Post />
        </div>
      </section>
    </main>
  )
}
