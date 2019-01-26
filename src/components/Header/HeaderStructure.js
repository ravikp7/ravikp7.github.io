import React, { Fragment } from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import Title from './Title';
import Navbar from './Navbar';
import style from './Header.module.css';
import NavToggle from './NavToggle';
import NavOverlay from './NavOverlay';

const HeaderStructure = ({
  title, navItems, resetState, toggleNavlinks, shouldDisplayOverlay,
}) => (
  <Fragment>
    <div className={style.mainHeader}>
      <div className={style.title}>
        <Title {...{ title }} />
      </div>
      <Media query="(max-width: 1000px)" onChange={resetState}>
        {matches => (!matches ? (
          <div className={style.navContainer}>
            <Navbar {...{ navItems, isSmallScreen: false }} />
          </div>
        ) : (
          <div className={style.navToggleContainer}>
            <NavToggle clickHandle={toggleNavlinks} />
          </div>
        ))
        }
      </Media>
    </div>
    <NavOverlay {...{ shouldDisplayOverlay, navItems }} />
  </Fragment>
);

HeaderStructure.propTypes = {
  title: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  resetState: PropTypes.func.isRequired,
  toggleNavlinks: PropTypes.func.isRequired,
  shouldDisplayOverlay: PropTypes.bool.isRequired,
};

export default HeaderStructure;
