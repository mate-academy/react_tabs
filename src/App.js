import React from 'react';
import { Tabs } from './component/Tabs/Tabs';
// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const mappedTabs = tabs.map((tab, tabIndex) => ({
  ...tab,
  index: tabIndex,
}));

const App = () => (
  <Tabs tabs={mappedTabs} index={0} />
);

export default App;
