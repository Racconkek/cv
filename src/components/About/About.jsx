/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './About.css';

import photo from '../../images/about.png'

function About() {
  return (
    <section id='about' className={'info-section about'}>
      <h2 className={'headline'}>О себе</h2>
      <div className={'about__photo-container'}>
        <img src={photo} alt='me' className={'about__photo'}/>
      </div>
      <p className={'about__description'}>
        <p className={'about__description__item'}>Я начинающий фронтенд-разработчик. Живу в Екатеринбурге, учусь в Уральском Федеральном университете на направлении Математика и компьютерные науки. </p>
        <p className={'about__description__item'}>Люблю изучать что-то новое, делать удобные и красивые штуки, доводить проекты до конца.</p>
        <p className={'about__description__item'}>В свободное время смотрю сериалы в оригинале, интересуюсь психологией и научпоп, хожу в бассейн.</p>
      </p>
    </section>
  );
}

export default About;