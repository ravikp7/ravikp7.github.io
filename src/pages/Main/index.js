import React, { Component } from 'react';
import CenterImage from '../../components/CenterImage';
import DroneGround from '../../components/DroneGround';
import style from './MainPage.module.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className={style.mainPage}>
        <DroneGround />
        <CenterImage />
      </div>
    );
  }
}
