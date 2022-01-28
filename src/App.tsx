import React from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  tab: Tab,
};

class App extends React.PureComponent<{}, State> {
  state : State = {
    tab: tabs[0],
  };

  onTabSelected = (id: string) => {
    this.setState(() => ({
      tab: tabs.find(el => el.id === id) || tabs[0],
    }));
  };

  render() {
    const { tab } = this.state;

    return (
      <div className="App">
        <h1>{ `Selected tab is ${tab.title}` }</h1>
        <Tabs tabs={tabs} selectedTabId={this.state.tab.id} changeContent={this.onTabSelected}>
          <div>{tab.content}</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
