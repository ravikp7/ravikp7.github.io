import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const Card = ({ name, url, tags }) => (
  <a href={url}>
    <div className={style.cardContainer}>
      <div className={style.name}>{name}</div>
      <div className={style.tags}>
        Tags:
        {' '}
        {tags.map(tag => (
          <span className={style.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
