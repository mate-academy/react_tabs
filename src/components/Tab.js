import React from 'react';
import { TabShape } from './TabShape';

export const Tab = ({ tab, onSelected }) => (
  <button
    type="button"
    className="tab"
    onClick={onSelected}
  >
    {tab.title}
  </button>
);

Tab.propTypes = TabShape.isRequired;

export default Tab;
