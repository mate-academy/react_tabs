/* eslint-disable no-console */
import React from 'react';
import { shapeAllTab } from '../Shapes';

export class Tab extends React.PureComponent {
  render() {
    return (
      <button
        className="button"
        type="submit"
        onClick={() => this.props.change(this.props.index)}
      >
        {this.props.tab.title}
      </button>
    );
  }
}

Tab.propTypes = shapeAllTab.isRequired;
