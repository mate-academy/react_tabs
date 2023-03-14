import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string,
  title: string,
  content: string,
};

type State = {
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTabId: tabs[0].id,
  };

  handleSwitch = (tab:Tab) => {
    this.setState({
      selectedTabId: tab.id,
    });
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${tabs[tabs.findIndex(tab => tab.id === selectedTabId)].title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          onTabSelected={this.handleSwitch}
        />
      </div>
    );
  }
}
