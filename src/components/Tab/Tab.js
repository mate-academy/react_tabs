import React from 'react';
import { TabsTypes } from '../Shape/TabsTypes';

export const Tab = (props) => {
  const {
    title,
    isActive,
    click,
  } = props;

  return (
    <button
      type="button"
      onClick={click}
      className={`nav-link ${isActive ? 'active' : ''}`}
    >
      {title}
    </button>
  );
};

Tab.propTypes = TabsTypes;
