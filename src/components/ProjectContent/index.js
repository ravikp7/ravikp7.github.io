import React from 'react';
import Card from './Card';
import style from './style.module.css';

const projectsInfo = [
  {
    name: 'node-beagle-boot',
    url: '#na',
    tags: ['NodeJS', 'USB', 'Networking'],
  },
  {
    name: 'Beagleboot',
    url: '#na',
    tags: ['NodeJS', 'React', 'Electron'],
  },
  {
    name: 'SnapTabs',
    url: '#na',
    tags: ['JS', 'Chrome'],
  },
];

const ProjectContent = () => (
  <div className={style.container}>
    {projectsInfo.map(project => (
      <Card {...project} key={project.name} />
    ))}
  </div>
);

export default ProjectContent;
