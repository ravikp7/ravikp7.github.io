import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const NavItem = ({ topic, isSmallScreen }) => (
  <div className={style.navItem} style={{ margin: isSmallScreen ? '15px' : '0 20px' }}>
    <span>
      <a href={`#${topic.toLowerCase()}`}>{topic}</a>
    </span>
  </div>
);

NavItem.propTypes = {
  topic: PropTypes.string.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default NavItem;
