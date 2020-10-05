/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Technologies.css';

function Technologies() {
  return (
    <section id='technology' className={'info-section technologies'}>
        <h2 className={'headline'}>Языки и фреймворки</h2>
        <div className={'technologies__list'}>
          <div className={'technologies__list__item'}>
            <p className={'technologies__names__item'}>frontend</p>
            <p className={'technologies__values__item'}>javascript, typescript, html, css, react</p>
          </div>
          <div  className={'technologies__list__item'}>
            <p className={'technologies__names__item'}>backend</p>
            <p className={'technologies__values__item'}>node.js, express, hbs, babel, webpack, mogodb, mongoose, postgres, sequelize</p>
          </div>
          <div  className={'technologies__list__item'}>
            <p className={'technologies__names__item'}>devops</p>
            <p className={'technologies__values__item'}>docker, heroku</p>
          </div>
          <div  className={'technologies__list__item'}>
            <p className={'technologies__names__item'}>теория</p>
            <p className={'technologies__values__item'}>ООП, алгоритмы, структуры данных</p>
          </div>
        </div>
    </section>
  );
}

export default Technologies;