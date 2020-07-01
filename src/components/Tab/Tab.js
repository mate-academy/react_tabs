/* eslint-disable no-console */
import React from 'react';
import { shapeTab } from '../Shapes';

export const Tab = props => (
  <button
    className="button"
    type="button"
    onClick={() => props.handleChange(props.index)}
  >
    {props.title}
  </button>
);

Tab.propTypes = shapeTab.isRequired;
