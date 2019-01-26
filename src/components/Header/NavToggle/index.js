import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const NavToggle = ({ clickHandle }) => (
  <button type="button" className={style.navButton} onClick={clickHandle}>
    <div className={style.buttonContainer}>
      <div className={style.bar} />
      <div className={style.bar} />
      <div className={style.bar} />
    </div>
  </button>
);

NavToggle.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};

export default NavToggle;
