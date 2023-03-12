import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

export default function PostIdPage() {

  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostById();
  }, [])

  return (
    <main className="content">
      {isLoading
        ? <span className="posts__loader"></span>
        : <div className="post">
          <h2 className="post__title">{post.title}</h2>
          <p className="post__txt">
            {post.body}
          </p>
          <span className="post__number">{post.id}</span>
        </div>}
    </main>
  )
}
