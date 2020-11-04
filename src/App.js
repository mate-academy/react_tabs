import React from 'react';
import { ContentTabs } from './components/ContentTabs';

import './App.css';

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

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

const App = () => (
  <ContentTabs tabs={preparedTabs} active={1} />
);

export default App;
