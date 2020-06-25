import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, index, changeTab }) => (
  <button
    type="button"
    className="tabs__button"
    onClick={() => changeTab(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Tab;
