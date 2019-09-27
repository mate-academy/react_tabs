import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

const tabs = [
  { title: 'Tab 1', content: 'Some text 1' },
  { title: 'Tab 2', content: 'Some text 2' },
  { title: 'Tab 3', content: 'Some text 3' },
];

const addIdToTabs = (tabsArray) => {
  let index = 0;

  return tabsArray.map(tab => (
    {
      id: index++,
      ...tab,
    }
  ));
};

const tabsWithId = addIdToTabs(tabs);

class App extends React.Component {
  state = {
    tabs: tabsWithId,
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 className="title">{tabs.length} tabs</h1>
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
