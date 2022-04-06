import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  tabList: Tab[];
  selectedTabId: string;
  tabTitle: string;
};

const { id, title } = tabs[0];

export class App extends React.Component<Props, State> {
  state = {
    tabList: tabs,
    selectedTabId: id,
    tabTitle: title,
  };

  setSelectedTab = (tabId: string, text: string) => {
    this.setState({ selectedTabId: tabId, tabTitle: text });
  };

  render() {
    const { tabList, selectedTabId, tabTitle } = this.state;

    return (
      <div className="App">
        <div className="content App__content">
          <h1 className="content__title">
            Selected tab is:&nbsp;
            {tabTitle}
          </h1>
          <div className="content__wrapper">
            <Tabs
              tabs={tabList}
              selectedId={selectedTabId}
              onTabSelected={this.setSelectedTab}
            />
          </div>
        </div>
      </div>
    );
  }
}
