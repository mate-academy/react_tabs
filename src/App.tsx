import { Component } from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string,
  title: string,
  content: string,
}

type State = {
  selectedTab: Tab,
};

class App extends Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { id } = this.state.selectedTab;

    return (
      <div>
        <h1>
          {`Selected tab is ${id}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
