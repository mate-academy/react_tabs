import React from 'react';
import { TabShape } from '../../shapes';
import './Content.css';

export const Content = (props) => {
  const { tabs, tabIndex } = props;

  return (
    <p className="tabs__text">
      {tabs[tabIndex].content}
    </p>
  );
};

Content.propTypes = TabShape.isRequired;
