import React from 'react';

import './App.scss';
import { TabsList } from './components/TabsList';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component<{}, State> {
  state = {
    tabsCopy: [...tabs],
    selectedTab: 'tab-1',
  };

  changeSelect = (tab: any) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { tabsCopy, selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${tabs.find(tab => tab.id === selectedTab)?.title}`}</h1>
        <div>
          <TabsList
            tabs={tabsCopy}
            selectedTab={selectedTab}
            onChange={event => {
              this.changeSelect(event.target.name);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
