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
    tabId: 'tab-1',
    title: 'Tab 1',
  };

  handlerButtonClick = (id: string) => {
    let tabTitle;

    if (tabs.find(tab => tab.id === id)) {
      tabTitle = (tabs.find(tab => tab.id === id));
    }

    if (tabTitle !== undefined) {
      this.setState({
        tabId: id,
        title: tabTitle.title || null,
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
        <Tabs allTabs={tabs} tabId={tabId} handleClick={this.handlerButtonClick} />
      </div>
    );
  }
}

export default App;
