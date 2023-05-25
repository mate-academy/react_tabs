import React from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './Types/Tab';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component {
  state = {
    tabsData: tabs,
    selectedTabId: tabs[0].id,
  };

  handleTabSelected = (tab: Tab) => {
    if (tab.id !== this.state.selectedTabId) {
      this.setState({ selectedTabId: tab.id });
    }
  };

  render() {
    const { tabsData, selectedTabId } = this.state;
    const selectedTab = tabsData.find((tab) => tab.id === selectedTabId);

    return (
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${selectedTab?.title}`}
        </h1>

        <Tabs
          tabs={tabsData}
          selectedTabId={selectedTabId}
          onTabSelected={this.handleTabSelected}
        />
      </div>
    );
  }
}
