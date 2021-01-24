import classnames from 'classnames';
import React from 'react';
import { TabType } from '../../types';

export const Tab = ({ index, onTableSelected, title, isActive }) => (
  <button
    type="button"
    onClick={() => onTableSelected(index)}
    className={classnames('button', { 'button is-light': isActive })}
  >
    {title}
  </button>
);

Tab.propTypes = TabType;
