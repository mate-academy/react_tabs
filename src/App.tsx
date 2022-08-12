import { Component } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { TabsType } from './type/TabsType';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  tabs: TabsType[],
  selectedTab: TabsType,
};

export class App extends Component<{}, State> {
  state = {
    tabs,
    selectedTab: tabs[0],
  };

  setTable = (selectedTabId: string): void => {
    const currentTable = tabs.find(table => table.id === selectedTabId)
      || tabs[0];

    this.setState({ selectedTab: currentTable });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="section">
        <h1 className="title">
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={this.state.tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.setTable}
        />
      </div>
    );
  }
}

export default App;
