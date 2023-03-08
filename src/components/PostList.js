import React from 'react';
import Post from './Post';

export default function PostList({ posts }) {
  return (
    <div className="posts__container">
      {posts.map((post, index) => (
        <Post number={index + 1} key={post.id} post={post} />
      ))}
    </div>
  )
}
