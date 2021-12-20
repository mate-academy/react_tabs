import React from 'react';

import './App.scss';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Text 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Text 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
  { id: 'tab-3', title: 'Tab 3', content: 'Text 3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  setSelectedTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          {`Selected tab is ${this.state.selectedTab.title}`}
        </h1>
        <section className="app__content">
          <Tabs
            tabs={tabs}
            selectedTabId={this.state.selectedTab.id}
            onTabSelected={tab => {
              this.setSelectedTab(tab);
            }}
          />
          <p className="app__text">
            {this.state.selectedTab.content}
          </p>
        </section>
      </div>
    );
  }
}

export default App;
