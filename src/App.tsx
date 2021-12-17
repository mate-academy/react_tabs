import React from 'react';
import { TabsButtons } from './components/TabsButtons';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  title: string,
  selectedTab: string,
  content: string;
};

class App extends React.Component<{}, State> {
  state = {
    title: `Selected tab is ${tabs[0].title}`,
    selectedTab: tabs[0].id,
    content: tabs[0].content,
  };

  onTabSelected = (title: string, id: string, content: string) => {
    this.setState({
      title: `Selected tab is ${title}`,
      selectedTab: id,
      content,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App__tabs">
          <h1 className="App__title">
            {this.state.title}
          </h1>

          <TabsButtons
            tabs={tabs}
            selectedTab={this.state.selectedTab}
            onClick={this.onTabSelected}
          />

          <p className="App__tab-content">
            {this.state.content}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
