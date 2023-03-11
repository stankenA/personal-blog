import React from 'react';
import '../index.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="page">
          <Header />
          <AppRouter />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
