import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  isSelected: string;
}

class App extends React.Component {
  state: State = {
    isSelected: 'tab-1',
  };

  selectButton = (buttonId: string) => {
    this.setState({ isSelected: buttonId });
  };

  selectedTubs = () => {
    const tab = tabs.find(item => item.id === this.state.isSelected);

    return tab;
  };

  render() {
    return (
      <div className="App">
        <h1>
          {'Selected tab is '}
          {this.selectedTubs()?.title}
        </h1>

        <Tabs
          tabs={tabs}
          onSelect={this.selectButton}
        />

        <div className="app__content">
          {this.selectedTubs()?.content}
        </div>
      </div>
    );
  }
}

export default App;
