import React, { Component } from 'react';
import Title from './Title';
import Navbar from './Navbar';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    const title = 'Ravi Kumar Prasad';
    const navItems = ['Projects', 'Blog', 'About', 'Contact'];
    return (
      <div className={style.mainHeader}>
        <div className={style.title}>
          <Title title={title} />
        </div>
        <div className={style.navContainer}>
          <Navbar navItems={navItems} />
        </div>
      </div>
    );
  }
}
