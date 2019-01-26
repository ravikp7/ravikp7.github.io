import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Title = ({ title }) => <span className={style.titleText}>{title}</span>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
