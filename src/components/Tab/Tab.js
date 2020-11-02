import React from 'react';
import PropTypes from 'prop-types';

import './tab.css';

const Tab = ({ title, content, onTabSelected, isActive }) => (
  <button
    type="button"
    className={`item ${isActive ? 'active' : ''}`}
    onClick={() => onTabSelected(content)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export { Tab };
