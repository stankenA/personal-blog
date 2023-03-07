import React from 'react'
import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo-link link">
          <img src={logo} alt="Logo" className="header__logo" />
          <h2 className="header__logo-title">BlogScape.</h2>
        </a>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__item">
              <a href="#" className="header__link link">About me</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link link">Blog</a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link link">Smth else</a>
            </li>
          </ul>
        </nav>
        <button className="header__button button">Log in</button>
      </div>
      <div className="header__banner">
        <div className="header__content">
          <h1 className="header__title">Entrust your site to developer</h1>
          <p className="header__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus provident
            molestiae, est similique, adipisci debitis dicta perspiciatis quia suscipit animi
            reprehenderit accusamus nam eius placeat, dolorem eum mollitia sapiente.
          </p>
          <button className="header__button button">Push me!</button>
        </div>
      </div>
    </header>
  )
}
