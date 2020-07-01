import React from 'react';
import PropTypes from 'prop-types';
import '../Tabs/Tabs.css';

export const Tab = ({ title, index, isActive, tabChange }) => (
  <button
    className={
      `${isActive
        ? 'tabs__btn tabs__btn--active'
        : 'tabs__btn'
      }`
    }
    type="button"
    onClick={() => tabChange(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  tabChange: PropTypes.func.isRequired,
};
