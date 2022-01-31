import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};
type State = {
  tabId: string,
  title: string | null,
};

class App extends React.PureComponent<Props, State> {
  state: State = {
    tabId: tabs[0].id,
    title: tabs[0].title,
  };

  handlerButtonClick = (id: string) => {
    const currentTab = (tabs.find(tab => tab.id === id));

    if (currentTab) {
      this.setState({
        tabId: id,
        title: currentTab.title,
      });
    }
  };

  render(): React.ReactNode {
    const { tabId, title } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          Selected tab is&nbsp;
          {title}
        </h1>
        <Tabs
          allTabs={tabs}
          tabId={tabId}
          handleClick={this.handlerButtonClick}
        />
      </div>
    );
  }
}

export default App;
