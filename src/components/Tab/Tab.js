import React from 'react';
import { TabShape } from '../../shapes/TabShape';

export const Tab = ({ title, onTabSelected }) => (
  <button
    type="button"
    className="ui inverted green large button"
    onClick={onTabSelected}
  >
    {title}
  </button>
);

Tab.propTypes = TabShape;
