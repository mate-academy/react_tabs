import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = ({
  tab,
  handleClick,
  index,
  currentTab,
}) => (
  <button
    type="button"
    onClick={() => handleClick(index)}
    className={(currentTab === index) ? 'tab active' : 'tab'}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tab;
