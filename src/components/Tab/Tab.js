/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
// import './Tab.css';

export const Tab = ({ title, index, isActive, selectTab }) => (
  <div
    className={`tab${isActive ? '--active' : ''}`}
    onClick={() => selectTab(index)}
  >
    <h2>{title}</h2>
  </div>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
