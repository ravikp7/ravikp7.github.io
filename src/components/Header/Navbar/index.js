import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import NavItem from './NavItem';

const Navbar = ({ navItems, isSmallScreen }) => (
  <nav className={style.navbar}>
    <div className={style.navList} style={{ flexDirection: isSmallScreen ? 'column' : 'row' }}>
      {navItems.map(topic => (
        <NavItem {...{ topic, isSmallScreen }} key={topic} />
      ))}
    </div>
  </nav>
);

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Navbar;
