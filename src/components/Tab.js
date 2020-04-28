import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ handleClick, title, activeTab, index }) => (
  <button
    type="button"
    className={
      (activeTab === index)
        ? 'tab active'
        : 'tab'
    }
    onClick={handleClick}
  >
    {title}
  </button>
);

Tab.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  activeTab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
