import React from 'react';
import './App.css';
import tabs from './api/tabs';
import Tabs from './Components/Tabs/Tabs';

const App = () => (
  <div>
    <Tabs tabs={tabs} />
  </div>
);

export default App;
