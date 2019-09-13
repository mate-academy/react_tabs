import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const classNames = require('classnames');

class Tab extends Component {
  onClick = () => {
    const { label, onClick } = this.props;

    onClick(label);
  }

  render() {
    const { onClick, props: { activeTab, label } } = this;
    const className = classNames(
      'tab-list-item__button',
      { 'tab-list-item__button--active': activeTab === label }
    );

    return (
      <li className="tab-list-item">
        <button type="button" className={className} onClick={onClick}>
          {label}
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
