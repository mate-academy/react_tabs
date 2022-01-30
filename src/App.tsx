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

  onSelectTab(k: string) {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === k) || tabs[0],
    });
  }

  render() {
    return (
      <>
        <h1>
          Selected tab is
          {' '}
          {this.state.selectedTab.id}
        </h1>
        <ControlledTabs
          tabs={tabs}
          // eslint-disable-next-line react/jsx-no-bind
          onSelectTab={this.onSelectTab.bind(this)}
        />
      </>
    );
  }
}

export default App;
