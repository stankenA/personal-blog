import React from 'react';
import Post from './Post';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function PostList({ posts, onPostRemove }) {

  return (
    <div className="posts__container">
      {posts.length !== 0
        ? <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition
              key={post.id}
              timeout={800}
              classNames="animation"
            >
              <Post number={index + 1} post={post} onPostRemove={onPostRemove} />
            </CSSTransition>

          ))}
        </TransitionGroup>
        : <h2 className="posts__subtitle">{`No posts? ( ͠° ͟ʖ ͡°)`}</h2>
      }
    </div>
  )
}
