import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Picture = ({ imageUrl, imageAlt, isCircle }) => (
  <div className={style.imageContainer}>
    <img className={isCircle ? style.pictureCircle : style.picture} src={imageUrl} alt={imageAlt} />
  </div>
);

Picture.defaultProps = {
  isCircle: false,
};

Picture.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isCircle: PropTypes.bool,
};

export default Picture;
