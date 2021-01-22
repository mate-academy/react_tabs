import React from 'react';
import { TabType } from '../../types';

export const Tab = ({ index, onTableSelected, title, isActive }) => (
  <button
    type="button"
    onClick={() => onTableSelected(index)}
    className={isActive ? 'button' : 'button is-light'}
  >
    {title}
  </button>
);

Tab.propTypes = TabType;
