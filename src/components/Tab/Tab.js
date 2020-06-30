/* eslint-disable no-console */
import React from 'react';
import { shapeAllTab } from '../Shapes';

export const Tab = props => (
  <button
    className="button"
    type="submit"
    onClick={() => props.change(props.index)}
  >
    {props.title}
  </button>
);

Tab.propTypes = shapeAllTab.isRequired;
