import React from 'react';

import './App.scss';
import { Tabs } from './Comonents/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    selectedTab: tabs[0],
  };

  selectedTab = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const {
      id,
      title,
      content,
    } = this.state.selectedTab;

    return (
      <div className="app">
        <h1>
          Selected tab is
          {' '}
          {title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedId={id}
          onSelectedTab={this.selectedTab}
        />
        <div className="app__content">
          {content}
        </div>
      </div>
    );
  }
}
export default App;
