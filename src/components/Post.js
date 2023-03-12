import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post({ post, onPostRemove }) {

  const navigate = useNavigate();

  function removePost(evt) {
    evt.stopPropagation();
    onPostRemove(post);
  }

  function goToPostPage() {
    navigate(`/posts/${post.id}`);
  }

  return (
    <div className="posts__card" onClick={goToPostPage}>
      <div className="posts__top">
        <span className="posts__number">{post.id}</span>
        <h2 className="posts__heading">{post.title}</h2>
        <button type="button" className="posts__delete-btn" onClick={removePost}></button>
      </div>
      <p className="posts__txt">{post.body}</p>
    </div>
  )
}
