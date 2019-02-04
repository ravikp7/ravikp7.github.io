import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import style from './style.module.css';

library.add(faTwitter, faLinkedin, faGithub);

const contactInfo = [
  {
    id: 'twitter',
    url: 'https://twitter.com/ravikp7',
  },
  {
    id: 'github',
    url: 'https://github.com/ravikp7',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/ravikp7/',
  },
];

const Contact = () => (
  <div className={style.main} id="contact">
    <div className={style.email}>
      <a href="mailto:7ravikp@gmail.com">7ravikp@gmail.com</a>
    </div>
    <div className={style.profileLinks}>
      {contactInfo.map(({ id, url }) => (
        <a href={url} target="blank" key={`${id}`}>
          <div className={style.faIcon}>
            <FontAwesomeIcon icon={['fab', id]} color="white" size="4x" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
