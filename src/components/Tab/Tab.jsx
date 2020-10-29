import React from 'react';
import PropTypes from 'prop-types';
import { TabPropTypes } from '../propTypes/TabPropTypes';

export const Tab = ({ handleClick, tab }) => (
  <button
    type="button"
    onClick={() => handleClick(tab)}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  handleClick: PropTypes.func.isRequired,
  tab: PropTypes.shape(TabPropTypes).isRequired,
};
