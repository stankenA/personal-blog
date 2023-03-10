import React from 'react';
import Post from './Post';

export default function PostList({ posts, onPostRemove }) {

  return (
    <div className="posts__container">
      {posts.length !== 0
        ? posts.map((post, index) => (
          <Post number={index + 1} key={post.id} post={post} onPostRemove={onPostRemove} />
        ))
        : <h2 className="posts__subtitle">{`No posts? ( ͠° ͟ʖ ͡°)`}</h2>
      }
    </div>
  )
}
