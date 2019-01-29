import React from 'react';
import ImageContainer from './ImageContainer';
import style from './style.module.css';

const CenterImage = () => (
  <div className={style.rippleContainer}>
    <ImageContainer />
  </div>
);

export default CenterImage;
