import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as NavLink } from 'react-router-hash-link';
import style from './style.module.css';

const NavItem = ({ topic, isSmallScreen }) => (
  <NavLink smooth to={`#${topic.toLowerCase()}`}>
    <div className={style.navItem} style={{ margin: isSmallScreen ? '15px' : '0 20px' }}>
      <span>{topic}</span>
    </div>
  </NavLink>
);

NavItem.propTypes = {
  topic: PropTypes.string.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default NavItem;
