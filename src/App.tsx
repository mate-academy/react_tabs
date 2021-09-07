import React from 'react';
import { Tabs } from './Tabs';
import { Tab } from './Types/Tab';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  tabSelected = (index: number) => {
    this.setState({
      selectedTab: tabs[index],
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            Selected tab:
            {` ${selectedTab.title}`}
          </h1>
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.tabSelected}
          />
        </div>
      </>
    );
  }
}

export default App;
