import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';
import { tabs } from './components/Tabs/TabsData';

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
