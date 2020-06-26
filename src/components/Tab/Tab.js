import React from 'react';
import { TabsTypes } from '../Shape/TabsTypes';

export const Tab = (props) => {
  const {
    title,
    isActive,
    click,
  } = props;

  return (
    <a
      role="button"
      onClick={click}
      className={`nav-link ${isActive ? 'active' : ''}`}
      data-toggle="tab"
      href="#home"
    >
      {title}
    </a>
  );
};

Tab.propTypes = TabsTypes;
