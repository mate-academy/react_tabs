import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, index, changeTab, isActive }) => (
  <button
    className={`tabs__button ${isActive ? 'tabs__button--active' : ''}`}
    type="button"
    onClick={() => changeTab(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
