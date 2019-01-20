import React, { Component } from 'react';
import style from './Header.module.css';

export default class Header extends Component {
  render() {
    const navItems = ['Projects', 'Blog', 'About', 'Contact'];
    return (
      <div className={style.mainHeader}>
        <div className={style.title}>Ravi Kumar Prasad</div>
        <div className={style.navContainer}>
          <nav className={style.navbar}>
            <div className={style.navList}>
              {navItems.map(navTopic => (
                <div className={style.navItem} key={navTopic}>
                  <div>
                    <a href="#na">{navTopic}</a>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
