import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const WorkCard = ({ name, children }) => (
  <div className={style.container}>
    <div className={style.title}>{name}</div>
    <div className={style.cardContent}>{children}</div>
  </div>
);

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WorkCard;
