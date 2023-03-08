import React, { useState } from 'react';

export default function PostForm({ onAddPost }) {

  const [title, setTitle] = useState('');
  const [txt, setTxt] = useState('');

  function addNewPost(evt) {
    evt.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      txt
    }

    onAddPost(newPost);
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
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />
      </div>
      <div className="posts__row">
        <label htmlFor="postTxt" className="posts__label">Text</label>
        <textarea
          name="postTxt"
          className="posts__input posts__input_type_textarea"
          placeholder="Enter post text..."
          value={txt}
          onChange={evt => setTxt(evt.target.value)}
        >
        </textarea>
      </div>
      <button type="submit" className="posts__submit button">Create post</button>
    </form>
  )
}
