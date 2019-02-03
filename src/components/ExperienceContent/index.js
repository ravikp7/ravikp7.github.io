import React from 'react';
import Card from './Card';
import style from './style.module.css';

const cardInfo = {
  role: 'Software Developer',
  period: 'May - August 2018',
  company: 'Google Summer of Code (BeagleBoard.org Foundation)',
};

const ExperienceContent = () => (
  <div className={style.container}>
    <Card />
    <Card {...cardInfo} />
    <Card {...{ ...cardInfo, period: 'May - August 2017' }} />
  </div>
);

export default ExperienceContent;
