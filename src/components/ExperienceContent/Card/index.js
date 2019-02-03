import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Card = ({ role, period, company }) => (
  <div className={style.container}>
    <div className={style.firstColumn}>
      <div className={style.role}>{role}</div>
      <div className={style.timePeriod}>{period}</div>
    </div>
    <div className={style.secondColumn}>
      <div className={style.progressPoint} />
      <div className={style.progressBar} />
    </div>
    <div className={style.thirdColumn}>{company}</div>
  </div>
);

Card.defaultProps = {
  role: '',
  period: '',
  company: '',
};

Card.propTypes = {
  role: PropTypes.string,
  period: PropTypes.string,
  company: PropTypes.string,
};

export default Card;
