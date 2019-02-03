import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import Picture from '../../Picture';

const Drone = ({
  id, name, logoUrl, onHover,
}) => (
  <div id={id} className={style[`drone-${id}`]} onMouseEnter={onHover}>
    <div className={style.bar}>
      <div className={style.verticalBar}>
        <div className={style.blade} />
      </div>
      <div className={style.verticalBar}>
        <div className={style.blade} />
      </div>
    </div>
    <div className={style.droneBody}>
      <Picture {...{ imageUrl: logoUrl, imageAlt: name }} />
    </div>
    <React.Fragment />
  </div>
);

Drone.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Drone;
