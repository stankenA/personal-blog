import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PostPage from '../pages/PostPage';
import AboutPage from '../pages/AboutPage';
import PageNotFound from '../pages/PageNotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
