import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import { Tab } from './components/Tab/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Part I', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, alias! Illo ipsa quo fugit cum dolorum accusantium culpa id est.' },
  { id: 'tab-2', title: 'Part II', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati dolorem perspiciatis quo accusantium nesciunt, veritatis officia minima dolore? Id non quam labore obcaecati nam nisi, mollitia molestias ipsum expedita.' },
  { id: 'tab-3', title: 'Part III', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque veritatis expedita voluptate recusandae ducimus debitis architecto fugit quas, nihil iure nisi officiis voluptas delectus sint laudantium et corrupti soluta? Quidem facere repellat sunt voluptate. Ipsam ipsa omnis accusamus quas sint. Iure placeat aliquid corporis!' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App container">
        <h1>
          {selectedTab.title}
        </h1>
        <Tab
          tabs={tabs}
          activeTabId={selectedTab.id}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
