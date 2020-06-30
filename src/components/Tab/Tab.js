import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

const Tab = ({ title, activeIndex, onTabSelected }) => (
  <li>
    <button onClick={onTabSelected} type="button" disabled={activeIndex}>
      {title}
    </button>
  </li>
);

export default Tab;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  activeIndex: PropTypes.bool.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
