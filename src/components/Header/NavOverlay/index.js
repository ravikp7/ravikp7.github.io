import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import style from './style.module.css';

const NavOverlay = ({ shouldDisplayOverlay, navItems }) => (
  <div
    style={shouldDisplayOverlay ? { height: '220px' } : { height: '0px' }}
    className={style.overlay}
  >
    <Navbar {...{ navItems, isSmallScreen: true }} />
  </div>
);

NavOverlay.propTypes = {
  shouldDisplayOverlay: PropTypes.bool.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavOverlay;
