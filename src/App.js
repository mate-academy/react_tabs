import React from 'react';
import './App.scss';
import Tabs from './components/tabContainer/Tabs';

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

const renderedTabs = tabs.map((tab, i) => ({
  ...tab,
  id: i,
}));

class App extends React.PureComponent {
  render() {
    return (
      <Tabs tab={renderedTabs} />
    );
  }
}

export default App;
