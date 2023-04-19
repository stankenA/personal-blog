import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import logo from '../images/logo.svg';

export default function Header() {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <header className="header">
      <div className="header__container">
        {isAuth
          ?
          <>
            <Link to="/home" className="header__logo-link link">
              <img src={logo} alt="Logo" className="header__logo" />
              <h2 className="header__logo-title">BlogScape.</h2>
            </Link>
            <nav className="header__nav">
              <ul className="header__menu">
                <li className="header__item">
                  <Link to="/about" className="header__link link">About me</Link>
                </li>
                <li className="header__item">
                  <Link to="/home" className="header__link link">Blog</Link>
                </li>
                <li className="header__item">
                  <Link to="*" className="header__link link">Smth else</Link>
                </li>
              </ul>
            </nav>
            <button className="header__button button" onClick={logout}>Log out</button>
          </>
          :
          <Link to="/home" className="header__logo-link header__logo-link_centered link">
            <img src={logo} alt="Logo" className="header__logo" />
            <h2 className="header__logo-title">BlogScape.</h2>
          </Link>
        }
      </div>
    </header>
  )
}
