import React from 'react';
import { ControlledTabs } from './components/ControlledTabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onSelectTab = (selectedTab: Tab) => {
    if (selectedTab !== this.state.selectedTab) {
      this.setState({
        selectedTab,
      });
    }
  };

  render() {
    return (
      <>
        <h1>
          Selected tab is
          {' '}
          {this.state.selectedTab.title}
        </h1>
        <ControlledTabs
          tabs={tabs}
          onSelectTab={this.onSelectTab}
        />
        {this.state.selectedTab.content}
      </>
    );
  }
}

export default App;
