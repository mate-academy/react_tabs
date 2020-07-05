import React from 'react';
import PropTypes from 'prop-types';
import { Shape } from './Shape';

export const Tab = ({ tab, onSelect, isSelected }) => (
  <button
    type="button"
    className={isSelected ? 'selected tab' : 'tab'}
    onClick={onSelect}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: Shape.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Tab;
