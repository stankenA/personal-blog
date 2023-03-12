import React from 'react';
import { Link } from 'react-router-dom';
import meViolet from '../images/me__violet.jpg';
import meCrazy from '../images/me__crazy.jpg';
import coding from '../images/coding.jpg';

export default function AboutPage() {
  return (
    <main className="content">
      <section className="about">
        <div className="about__container">
          <div className="about__content">
            <h1 className="about__title">About Me</h1>
            <p className="about__txt">
              Hi, my name is Artem. I'm junior Front-end developer in CAPS agency. Like doing things for Web. Enjoy water and memes.
            </p>
            <Link to="https://t.me/stanken_a" target={'_blank'} className="about__link button">Contact Me</Link>
          </div>
          <div className="about__images">
            <img src={meCrazy} alt="context image" className="about__img" />
            <img src={meViolet} alt="context image" className="about__img" />
          </div>
        </div>
        <div className="about__container">
          <span className="about__blue-box"></span>
          <img src={coding} alt="context image" className="about__big-img" />
          <div className="about__content">
            <h1 className="about__title">My clients - my priority</h1>
            <p className="about__txt">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <Link to="https://github.com/stankenA" target={'_blank'} className="about__link button">My Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
