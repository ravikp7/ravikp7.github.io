import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import style from './style.module.css';

const Title = ({ title }) => (
  <div className={style.navLink}>
    <NavLink smooth to="#main">
      <span className={style.titleText}>{title}</span>
    </NavLink>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
