import React from 'react';
import PropTypes from 'prop-types';
import { Shape } from './Shape';

export const Tab = ({ tab, onFocus, isFocused }) => (
  <button
    type="button"
    className={isFocused ? 'selected tab' : 'tab'}
    onClick={onFocus}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: Shape.isRequired,
  onFocus: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default Tab;
