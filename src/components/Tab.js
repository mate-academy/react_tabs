import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tabClickHandler, activeIdx, tabIdx, children }) => (
  <button
    type="button"
    className={tabIdx === activeIdx ? 'active item' : 'item'}
    onClick={tabClickHandler}
  >
    {children}
  </button>
);

Tab.propTypes = {
  tabClickHandler: PropTypes.func.isRequired,
  activeIdx: PropTypes.number.isRequired,
  tabIdx: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Tab;
