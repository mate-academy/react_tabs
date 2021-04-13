import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.PureComponent {
  state = {
    selectTabs: tabs[0],
  }

  onClickTab = (event) => {
    this.setState({
      selectTabs: tabs.find(ele => ele.id === event.target.value),
    });
  }

  render() {
    const { selectTabs } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectTabs.title}
        </h1>
        <Tabs
          selectTabsId={selectTabs.id}
          tabs={tabs}
          onClickTab={this.onClickTab}
        />
      </div>
    );
  }
}
