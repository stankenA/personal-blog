import React, { useState } from 'react';
import '../index.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import AppRouter from './AppRouter';
import { AuthContext } from '../contexts/AuthContext';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <div className="App">
          <div className="page">
            <Header />
            <AppRouter />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
