import React from 'react';
import './Tab.css';
import { TabShape } from './Shapes';

export const Tab = ({ name, index, onClick }) => (
  <button
    type="button"
    className="btn btn-success"
    onClick={() => onClick(index)}
  >
    {name}
  </button>
);

Tab.propTypes = TabShape.isRequired;
