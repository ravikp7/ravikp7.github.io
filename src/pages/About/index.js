import React from 'react';
import style from './style.module.css';

const About = () => (
  <div className={style.main} id="about">
    <div className={style.title}>About</div>
    <div className={style.aboutContent}>
      I am making and breaking things since I was a kid. I spend most of my time coding or tweaking
      hardware and electronics stuff. I enjoy solving problems as they keep me alive. I care a lot
      about efficient processes and maintainable software. I've a very simple goal in life to work
      towards making this world a better place.
    </div>
    <div className={style.quoteHeader}>A quote I strongly believe in</div>
    <div className={style.quoteContent}>
      "It's not that I'm so smart, it's just that I stay with problems longer"- Albert Einstein
    </div>
  </div>
);

export default About;
