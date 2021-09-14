import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nostrum maiores minus, dolorum tempora fugiat quibusdam similique laudantium labore magnam, necessitatibus cupiditate a.' },
  { id: 'tab-2', title: 'Profile', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quisquam blanditiis voluptas impedit commodi, similique aut, ad maiores consequuntur corporis ullam modi nemo iure. Eaque?' },
  { id: 'tab-3', title: 'Contact', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius eligendi necessitatibus! Odit, illum ab vel dolore est laborum veniam.' },
];

interface State {
  selectedTab: Tab;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (changedTab: Tab) => {
    this.setState({
      selectedTab: changedTab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1
          className="text-center"
        >
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
