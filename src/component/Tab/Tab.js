import React, { Component } from 'react';
import { tabListProps } from '../PropTypes/PropTypes';
import './Tab.css';

// eslint-disable-next-line react/prefer-stateless-function
class Tab extends Component {
  render() {
    const {
      handler, title, isActive, index,
    } = this.props;

    return (
      <button
        type="button"
        onClick={handler}
        className={
          isActive === index
            ? 'button-active'
            : 'button'
        }
      >
        {title}
      </button>
    );
  }
}

Tab.propTypes = tabListProps;

export default Tab;
