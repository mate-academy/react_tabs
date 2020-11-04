import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Tab } from './components/Tab/Tab';
import { Tabs } from './components/Tabs/Tabs';

const App = () => (
  <main className="app">
    <Tabs
      startIndex={1}
    >
      <Tab title="Tab 1">
        It could be a text 1
      </Tab>
      <Tab title="Tab 2">
        It could be a text 2
      </Tab>
      <Tab title="Tab 3">
        It could be a text 3
      </Tab>
    </Tabs>
  </main>
);

export default App;
