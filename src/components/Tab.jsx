import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, onTabSelected, currClass }) => (
  <button
    type="button"
    className={currClass}
    onClick={onTabSelected}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  currClass: PropTypes.string.isRequired,
};
