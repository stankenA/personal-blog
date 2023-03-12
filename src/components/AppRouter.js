import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PostPage from '../pages/PostPage';
import AboutPage from '../pages/AboutPage';
import PageNotFound from '../pages/PageNotFound';
import PostIdPage from '../pages/PostIdPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/posts" element={<PostPage />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
