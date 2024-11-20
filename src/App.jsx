import React from 'react';
import './app.scss';
import { Tab } from './components/Tab/Tab';
import { Tabs } from './components/Tabs/Tabs';

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

// const preparedTabs = tabs.map((tab, index) => ({
//   ...tab,
//   id: index,
// }));

const App = () => (
  <main className="app">
    <h1 className="app__title">React tabs</h1>
    <Tabs
      startIndex={1}
    >
      {/* <>
        {preparedTabs.map(tab => (
          <Tab title={tab.title} key={tab.id}>
            {tab.content}
          </Tab>
        ))}
      </> */}
      <Tab title="Tab 1">
        It could be a text1
      </Tab>
      <Tab title="Tab 2">
        It could be a text2
      </Tab>
      <Tab title="Tab 3">
        It could be a text3
      </Tab>
    </Tabs>
  </main>
);

export default App;
