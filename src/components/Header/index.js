import React, { PureComponent } from 'react';
import HeaderStructure from './HeaderStructure';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { shouldDisplayOverlay: false };
    this.toggleNavlinks = this.toggleNavlinks.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  toggleNavlinks() {
    this.setState(state => ({ shouldDisplayOverlay: !state.shouldDisplayOverlay }));
  }

  resetState() {
    this.setState({ shouldDisplayOverlay: false });
  }

  render() {
    const props = {
      ...this.props,
      ...this.state,
      toggleNavlinks: this.toggleNavlinks,
      resetState: this.resetState,
    };
    return <HeaderStructure {...props} />;
  }
}
