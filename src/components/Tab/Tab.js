import React, { Component } from 'react';
import { TabTypes } from '../../constants/proptypes';
import './Tab.scss';

// eslint-disable-next-line import/prefer-default-export
export class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    const {
      title, content, isActive,
    } = this.props;

    return (
      <div className="tab">
        <button
          className={`tab__button ${isActive ? ' tab__button--active' : ''}`}
          onClick={this.handleClick}
          type="button"
        >
          {title}
        </button>
        <p className={`tab__text ${isActive ? ' tab__text--active' : ''}`}>
          {content}
        </p>
      </div>
    );
  }
}

Tab.propTypes = TabTypes;
