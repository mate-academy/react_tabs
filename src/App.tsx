import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'TEXT 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque.' },
  { id: 'tab-2', title: 'Tab 2', content: 'TEXT 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque.' },
  { id: 'tab-3', title: 'Tab 3', content: 'TEXT 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque.' },
];

interface State {
  selectedTab: Tab;
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  chooseTab = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected tab is ${this.state.selectedTab.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          chooseTab={this.chooseTab}
        />
      </div>
    );
  }
}

export default App;
