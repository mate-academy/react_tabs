import React from 'react';
import './Tab.css';
import { TabShape } from './TabShape';

export const Tab = ({ callback, index, isActive, title }) => (
  <button
    type="button"
    className={isActive ? 'App__link isActive' : 'App__link'}
    onClick={() => callback(index)}
  >
    {title}
  </button>
);

Tab.propTypes = TabShape;
