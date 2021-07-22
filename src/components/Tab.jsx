import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export const Tab = ({ title, onClick, className }) => (
  <button
    className={className}
    onClick={() => onClick(title)}
  >
    {title}
  </button>
)

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}
