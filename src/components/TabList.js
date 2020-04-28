import React from 'react';
import { PropForTab } from './ProrTypes';

import { Tab } from './Tab';

export const TabList = ({ tabs, toggle, active }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <Tab tab={tab} toggle={toggle} active={active} key={tab.title} />
    ))}
  </ul>
);

TabList.propTypes = PropForTab;
