import React from 'react';
import PropTypes from 'prop-types';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import style from './style.module.css';

const Title = ({ title }) => (
  <span className={style.titleText}>
    <NavLink smooth to="#main">
      {title}
    </NavLink>
  </span>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
