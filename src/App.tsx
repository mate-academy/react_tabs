import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: string;
  content: string;
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0].title,
    content: tabs[0].content,
  };

  TabSelected = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // eslint-disable-next-line no-console
    console.log(event.currentTarget.value);
    const { value } = event.currentTarget;
    const newSelectetTab = tabs.find(tab => (value === tab.id));

    this.setState((state) => ({
      content: newSelectetTab?.content || state.content,
      selectedTab: newSelectetTab?.title || state.selectedTab,
    }));
  };

  render() {
    const { selectedTab, content } = this.state;

    return (
      <div className="App">
        <h1 className="App__title title is-1">
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
        <Tabs
          tabs={tabs}
          content={content}
          onTabSelected={this.TabSelected}
        />
      </div>
    );
  }
}

export default App;
