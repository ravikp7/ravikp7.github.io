import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const NavItem = ({ topic }) => (
  <div className={style.navItem}>
    <span>
      <a href={`#${topic.toLowerCase()}`}>{topic}</a>
    </span>
  </div>
);

NavItem.propTypes = {
  topic: PropTypes.string.isRequired,
};

export default NavItem;
