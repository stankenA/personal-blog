import React, { useEffect, useState } from 'react';
import '../index.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import AppRouter from './AppRouter';
import { AuthContext } from '../contexts/AuthContext';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
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
