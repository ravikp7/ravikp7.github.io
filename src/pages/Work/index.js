import React from 'react';
import WorkCard from '../../components/WorkCard';
import ExperienceCard from '../../components/ExperienceContent';
import style from './style.module.css';

const WorkPage = () => (
  <div className={style.main}>
    <div className={style.cardContainer}>
      <div className={style.work}>
        <WorkCard {...{ name: 'Experience' }}>
          <ExperienceCard />
        </WorkCard>
      </div>
      <div className={style.work}>
        <WorkCard {...{ name: 'Projects' }}>
          <React.Fragment />
        </WorkCard>
      </div>
    </div>
    <div className={style.infoText}>Wanna see some code or resume ?</div>
  </div>
);

export default WorkPage;
