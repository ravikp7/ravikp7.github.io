import React, { Component } from 'react';
import Drone from './Drone';
import style from './style.module.css';

class DroneGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dronePositions: [
        { x: 40, y: 15 },
        { x: 65, y: 25 },
        { x: 10, y: 25 },
        { x: 15, y: 80 },
        { x: 65, y: 75 },
      ],
    };
    this.loop = this.loop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.frame = true;
    setTimeout(() => {
      this.frame = window.requestAnimationFrame(this.loop);
    }, 2000);
  }

  componentDidMount() {
    this.element = document.querySelector('#animate-box');
    this.elements = [1, 2, 3, 4, 5].map(value => document.querySelector(`#animate-box-${value}`));
    if (!this.frame) {
      this.frame = window.requestAnimationFrame(this.loop);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.frame);
  }

  onHover() {
    this.setState((state) => {
      const previousPositions = state.dronePositions;
      return {
        dronePositions: previousPositions.reverse(),
      };
    });
  }

  loop() {
    const positionChangeValue = 0.5;
    this.elements.forEach((element, index) => {
      const currentElement = element;
      if (element.style.top !== '' && element.style.left !== '') {
        const top = parseFloat(element.style.top.slice(0, -2));
        const left = parseFloat(element.style.left.slice(0, -2));
        const { dronePositions } = this.state;
        const { x, y } = dronePositions[index];
        if (left < x) {
          const xCoordinate = `${left + positionChangeValue}vw`;
          currentElement.style.left = xCoordinate;
        }
        if (left > x) {
          const xCoordinate = `${left - positionChangeValue}vw`;
          currentElement.style.left = xCoordinate;
        }
        if (top < y) {
          const yCoordinate = `${top + positionChangeValue}vh`;
          currentElement.style.top = yCoordinate;
        }
        if (top > y) {
          const yCoordinate = `${top - positionChangeValue}vh`;
          currentElement.style.top = yCoordinate;
        }
      } else {
        currentElement.style.top = '50vh';
        currentElement.style.left = '50vw';
      }
    });
    this.frame = window.requestAnimationFrame(this.loop);
  }

  render() {
    return (
      <div className={style.playground}>
        {[1, 2, 3, 4, 5].map(value => (
          <Drone id={`animate-box-${value}`} key={value} onHover={this.onHover} />
        ))}
      </div>
    );
  }
}

export default DroneGround;
