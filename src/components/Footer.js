import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/footer__logo.svg';
import telegram from '../images/telegram.svg';
import vk from '../images/VK.svg';
import github from '../images/GitHub.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__info">
            <Link to="/" className="footer__logo-container link">
              <img src={logo} alt="logo" className="footer__logo" />
              <p className="footer__logo-txt">BlogScape.</p>
            </Link>
            <p className="footer__info-txt">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae expedita quis possimus ipsum ullam
            </p>
          </div>
          <nav className="footer__nav">
            <p className="footer__subtitle">
              QUICK LINKS
            </p>
            <ul className="footer__menu">
              <li className="footer__menu-item">
                <Link to="/about" className="footer__link link">About me</Link>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__link link">About Us</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__link link">About Us</a>
              </li>
              <li className="footer__menu-item">
                <a href="#" className="footer__link link">About Us</a>
              </li>
            </ul>
          </nav>
          <div className="footer__contacts">
            <p className="footer__subtitle">CONTACTS</p>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={github} alt="icon" className="footer__icon-img" />
                  </span>
                </a>
                <div className="footer__item-content">
                  <p className="footer__social">GitHub</p>
                  <p className="footer__social-name">stanken_a</p>
                </div>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={github} alt="icon" className="footer__icon-img" />
                  </span>
                </a>
                <div className="footer__item-content">
                  <p className="footer__social">GitHub</p>
                  <p className="footer__social-name">stanken_a</p>
                </div>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__icon-box">
                  <span className="footer__icon">
                    <img src={github} alt="icon" className="footer__icon-img" />
                  </span>
                </a>
                <div className="footer__item-content">
                  <p className="footer__social">GitHub</p>
                  <p className="footer__social-name">stanken_a</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__rights">
          ©BlogScape. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
