import React, { useState } from 'react';

export default function PostForm({ onAddPost, postId }) {

  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(evt) {
    evt.preventDefault();

    onAddPost({ ...post, id: postId });
    setPost({ title: '', body: '' });
  }

  const isPostEmpty = post.body === '' || post.title === '';

  return (
    <form className="form" onSubmit={addNewPost}>
      <div className="form__row">
        <label htmlFor="postTitle" className="form__label">Title</label>
        <input
          name="postTitle"
          type="text"
          className="form__input"
          placeholder="Enter post title..."
          required
          value={post.title}
          onChange={evt => setPost({ ...post, title: evt.target.value })}
        />
      </div>
      <div className="form__row">
        <label htmlFor="postTxt" className="form__label">Text</label>
        <textarea
          name="postTxt"
          className="form__input form__input_type_textarea"
          placeholder="Enter post text..."
          required
          value={post.body}
          onChange={evt => setPost({ ...post, body: evt.target.value })}
        >
        </textarea>
      </div>
      <button
        type="submit"
        className={`form__submit button ${isPostEmpty && 'form__submit_disabled'}`}
        disabled={isPostEmpty ? true : false}
      >Create post</button>
    </form>
  )
}
