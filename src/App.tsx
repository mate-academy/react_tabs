import React from 'react';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Съешь же ещё этих мягких французских булок да выпей чаю.' },
  { id: 'tab-2', title: 'Tab 2', content: 'The quick brown fox jumps over the lazy dog.' },
  { id: 'tab-3', title: 'Tab 3', content: 'Лучше рука в небе, чем синица в журавле.' },
];

interface State {
  selectedTab: Tab,
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeTab = (tab: Tab) => {
    const { selectedTab } = this.state;

    if (tab.id !== selectedTab.id) {
      this.setState({
        selectedTab: tabs.find(item => item.id === tab.id)
          || { id: '', title: '', content: '' },
      });
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <div>
          {'Tabs: '}
          {tabs.length}
        </div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelect={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
