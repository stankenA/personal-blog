import React from 'react'

export default function Post({ post }) {
  return (
    <div className="posts__card">
      <div className="posts__top">
        <h2 className="posts__heading">{post.title}</h2>
        <span className="posts__number">{post.id}</span>
        <button className="posts__delete-btn"></button>
      </div>
      <p className="posts__txt">{post.txt}</p>
    </div>
  )
}
