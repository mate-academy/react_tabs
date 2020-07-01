import React from 'react';
import PropTypes from 'prop-types';
import { TabShape } from './TabShape';

export const Tab = ({ tab, onSelected, isSelected }) => (
  <button
    type="button"
    className={isSelected ? 'tab selected' : 'tab'}
    onClick={onSelected}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: TabShape.isRequired,
  onSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Tab;
