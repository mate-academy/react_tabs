import React from 'react';
import { TabShape } from '../../shapes/TabShape';

export const Tab = ({ title, onTabSelected }) => (
  <button
    type="button"
    className="ui green active item"
    onClick={onTabSelected}
  >
    {title}
  </button>
);

Tab.propTypes = TabShape;
