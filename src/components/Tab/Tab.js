import React, { Component } from 'react';
import { TabTypes } from '../../constants/proptypes';
import './Tab.scss';

// eslint-disable-next-line
export class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.title);
  }

  render() {
    const {
      key, title, content, isActive,
    } = this.props;

    return (
      <div className="tab" key={key}>
        <div
          className={`tab__button ${isActive ? ' tab__button--active' : ''}`}
          onClick={this.handleClick}
          role="presentation"
        >
          {title}
        </div>
        <p className={`tab__text ${isActive ? ' tab__text--active' : ''}`}>
          {content}
        </p>
      </div>
    );
  }
}

Tab.propTypes = TabTypes;
