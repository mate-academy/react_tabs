import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';

const Tab = ({ title, children, activeIndex, index, onTabSelected }) => (
  <>
    <li className="Tabs__Tab Tab">
      <button
        onClick={() => onTabSelected(index, children)}
        disabled={activeIndex === index}
        type="button"
      >
        {title}
      </button>
    </li>
  </>
);

export default Tab;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  activeIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
