import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404 - Page not found</h1>
      <p className="not-found__txt">{`Nothing to look at here :(`}</p>
      <Link to="/" className="not-found__link">Home</Link>
    </section>
  )
}
