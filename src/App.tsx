import React from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {

};

type State = {
  selectedTab:Tab;
};

class App extends React.Component<Props, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelect = (tab:Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    return (
      <div className="App">
        <h3>
          Current tab is:
          {' '}
          <b>
            {
              this.state.selectedTab.id
            }
          </b>
        </h3>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelect={this.onTabSelect}
        />
      </div>
    );
  }
}

export default App;
