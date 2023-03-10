import React, { useState } from 'react';

export default function PostForm({ onAddPost }) {

  const [post, setPost] = useState({ title: '', text: '' });

  function addNewPost(evt) {
    evt.preventDefault();

    onAddPost({ ...post, id: post.title });
    setPost({ title: '', text: '' });
  }

  const isPostEmpty = post.text === '' || post.title === '';

  return (
    <form className="posts__form" onSubmit={addNewPost}>
      <div className="posts__row">
        <label htmlFor="postTitle" className="posts__label">Title</label>
        <input
          name="postTitle"
          type="text"
          className="posts__input"
          placeholder="Enter post title..."
          required
          value={post.title}
          onChange={evt => setPost({ ...post, title: evt.target.value })}
        />
      </div>
      <div className="posts__row">
        <label htmlFor="postTxt" className="posts__label">Text</label>
        <textarea
          name="postTxt"
          className="posts__input posts__input_type_textarea"
          placeholder="Enter post text..."
          required
          value={post.text}
          onChange={evt => setPost({ ...post, text: evt.target.value })}
        >
        </textarea>
      </div>
      <button
        type="submit"
        className={`posts__submit button ${isPostEmpty && 'posts__submit_disabled'}`}
        disabled={isPostEmpty ? true : false}
      >Create post</button>
    </form>
  )
}
