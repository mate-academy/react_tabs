import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ handler, activeIndex, tabIndex, children }) => (
  <button
    className={
      tabIndex === activeIndex
        ? 'tabs__button tabs__button--active'
        : 'tabs__button'
    }
    type="button"
    onClick={handler}
  >
    {children}
  </button>
);

Tab.propTypes = {
  handler: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  tabIndex: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Tab;
