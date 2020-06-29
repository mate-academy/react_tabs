import React from 'react';
import { Tab } from './Tab';
import { TabSectionShapes } from './Shapes';

export const TabSection = ({ tabs, onClick }) => (
  <div className="buttons">
    {tabs.map((tab, tabIndex) => (
      <Tab
        key={tab.title}
        index={tabIndex}
        onClick={onClick}
        name={tab.title}
      />
    ))}
  </div>
);

TabSection.propTypes = TabSectionShapes.isRequired;
