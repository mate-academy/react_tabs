import React from 'react';

import './App.scss';
import { Tabs } from './Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quasi!' },
  { id: 'tab-2', title: 'Profile', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime architecto, recusandae ipsam accusamus odit inventore rem fugit neque sit magni!' },
  { id: 'tab-3', title: 'Contact', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, obcaecati? Officia vitae error facilis ratione nostrum! Ut asperiores atque perspiciatis id ipsum placeat fugit eos unde adipisci obcaecati, praesentium rerum.' },
];

type State = {
  activeTab: Tab;
};
class App extends React.Component<{}, State> {
  state: State = {
    activeTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    const { activeTab } = this.state;
    const { title } = activeTab;

    return (
      <>
        <div className="App">
          <h1>{`Selected tab ${title}`}</h1>
          <Tabs
            tabs={tabs}
            changeTab={this.onTabSelected}
            activeTab={activeTab}
          />
        </div>
      </>
    );
  }
}

export default App;
