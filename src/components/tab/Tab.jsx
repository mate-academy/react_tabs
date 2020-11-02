import React from 'react';
import './Tab.css';
import { TabShape } from '../shapes/TabShape';

export const Tab = ({ callback, index, isActive, title }) => (
  <button
    type="button"
    className={isActive ? 'ui orange button' : 'ui orange basic button'}
    onClick={() => callback(index)}
  >
    {title}
  </button>
);

Tab.propTypes = TabShape;
