import React from 'react';
import WorkCard from '../../components/WorkCard';
import ExperienceCard from '../../components/ExperienceContent';
import ProjectContent from '../../components/ProjectContent';
import style from './style.module.css';

const WorkPage = () => (
  <div className={style.main} id="work">
    <div className={style.cardContainer}>
      <div className={style.work}>
        <WorkCard {...{ name: 'Experience' }}>
          <ExperienceCard />
        </WorkCard>
      </div>
      <div className={style.work}>
        <WorkCard {...{ name: 'Projects' }}>
          <ProjectContent />
        </WorkCard>
      </div>
    </div>
    <div className={style.infoText}>
      Wanna see
      {' '}
      <a href="https://github.com/ravikp7" target="blank">
        some code
      </a>
      {' '}
      or
      {' '}
      <a href="#na">resume</a>
      {' '}
?
    </div>
  </div>
);

export default WorkPage;
