import React from 'react';
import Picture from '../../Picture';
import ImageOverlay from './ImageOverlay';
import displayPicture from '../../../assets/my-picture.jpg';
import style from './style.module.css';

const displayPictureAlt = 'Ravi Kumar Prasad';

const ImageContainer = () => (
  <div className={style.banner}>
    <Picture {...{ imageUrl: displayPicture, imageAlt: displayPictureAlt, isCircle: true }} />
    <ImageOverlay />
  </div>
);

export default ImageContainer;
