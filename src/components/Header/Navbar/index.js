import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import NavItem from './NavItem';

const Navbar = ({ navItems }) => (
  <nav className={style.navbar}>
    <div className={style.navList}>
      {navItems.map(navTopic => (
        <NavItem topic={navTopic} />
      ))}
    </div>
  </nav>
);

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
