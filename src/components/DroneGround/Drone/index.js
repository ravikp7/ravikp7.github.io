import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Drone = ({ id, onHover }) => (
  <div id={id} className={style.drone} onMouseEnter={onHover}>
    <div className={style.bar}>
      <div className={style.verticalBar}>
        <div className={style.blade} />
      </div>
      <div className={style.verticalBar}>
        <div className={style.blade} />
      </div>
    </div>
    <div className={style.droneBody} />
    <React.Fragment />
  </div>
);

Drone.propTypes = {
  id: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Drone;
