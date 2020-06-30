import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

const Tab = ({ title, activeIndex, onTabSelected }) => (
  <li className="Tabs__Tab Tab">
    <button onClick={onTabSelected} disabled={activeIndex} type="button">
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
