import React, { PureComponent } from 'react';
import Header from './Header';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Header />;
  }
}
