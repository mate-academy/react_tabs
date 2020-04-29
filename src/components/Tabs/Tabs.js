import React from 'react';
import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, clickHandler }) => tabs.map(
  tab => (
    <Tab tab={tab} clickHandler={clickHandler} key={tab.title} />
  ),
);
