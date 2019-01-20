import React, { Component } from 'react';
import displayPicture from '../assets/my-picture.jpg';
import style from './MainPage.module.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className={style.mainPage}>
        <div className={style.banner}>
          <div className={style.imageContainer}>
            <img className={style.displayPicture} src={displayPicture} alt="Ravi Kumar Prasad" />
          </div>
          <div className={style.infoCard}>
            <div className={style.infoText}>Ravi Kumar Prasad</div>
          </div>
        </div>
      </div>
    );
  }
}
