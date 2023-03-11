import React from 'react'

export default function Post({ post, number, onPostRemove }) {

  function removePost() {
    onPostRemove(post);
  }

  return (
    <div className="posts__card">
      <div className="posts__top">
        <span className="posts__number">{number}</span>
        <h2 className="posts__heading">{post.title}</h2>
        <button className="posts__delete-btn" onClick={removePost}></button>
      </div>
      <p className="posts__txt">{post.body}</p>
    </div>
  )
}
