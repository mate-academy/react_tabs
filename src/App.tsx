import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'THE PYRAMIDS OF GIZA', content: 'Built: About 2600 B.C. Egypt. Massive tombs of Egyptian pharaohs, the pyramids are the only ancient wonders still standing today. The tallest of the three is called the Great Pyramid.' },
  { id: 'tab-2', title: 'HANGING GARDENS OF BABYLON', content: 'Built: Unknown, in Iraq. Legend has it that this garden paradise was planted on an artificial mountain and construct to please the wife of King Nebuchadnezzar II, but many experts say it never really existed.' },
  { id: 'tab-3', title: 'TEMPLE OF ARTEMIS', content: 'Built in the sixth century B.C. in Ephesus, Turkey. Built to honor Artemis, the Greek goddess of the hunt, this temple was said to have housed many works of art.' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedTab.title}`}
        </h1>

        <div className="tab__container">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.onTabSelected}
          />

          <p className="tab_content">
            {selectedTab.content}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
