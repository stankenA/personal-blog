import React, { useState } from 'react';

export default function PostForm({ onAddPost }) {

  const [post, setPost] = useState({ title: '', txt: '' });

  function addNewPost(evt) {
    evt.preventDefault();

    onAddPost({ ...post, id: Date.now() });
    setPost({ title: '', txt: '' });
  }

  return (
    <form className="posts__form" onSubmit={addNewPost}>
      <div className="posts__row">
        <label htmlFor="postTitle" className="posts__label">Title</label>
        <input
          name="postTitle"
          type="text"
          className="posts__input"
          placeholder="Enter post title..."
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
          value={post.txt}
          onChange={evt => setPost({ ...post, txt: evt.target.value })}
        >
        </textarea>
      </div>
      <button type="submit" className="posts__submit button">Create post</button>
    </form>
  )
}
