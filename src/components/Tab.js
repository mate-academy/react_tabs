import React from 'react';
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

Tab.propTypes = TabShape.isRequired;

export default Tab;
