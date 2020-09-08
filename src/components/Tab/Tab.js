import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ title, index, isActive, selectTab }) => (
  <div
    className={`tab${isActive ? '--active' : ''}`}
    onClick={() => selectTab(index)}
    onKeyPress={() => selectTab(index)}
    role="button"
    tabIndex="0"
  >
    <p>{title}</p>
  </div>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
