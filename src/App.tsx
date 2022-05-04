import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  isSelected: Tab;
}

class App extends React.Component {
  state: State = {
    isSelected: tabs[0],
  };

  selectButton = (buttonId: Tab) => {
    this.setState({ isSelected: buttonId });
  };

  render() {
    const { isSelected } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected tab is '}
          {isSelected?.title}
        </h1>

        <Tabs
          tabs={tabs}
          onSelect={this.selectButton}
          selectedTabId={isSelected.id}
        />

        <div className="app__content">
          {isSelected?.content}
        </div>
      </div>
    );
  }
}

export default App;
