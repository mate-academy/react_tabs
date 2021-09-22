import React from 'react';
import TabComponent from './components/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTabId: string;
  tabs: Tab[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedTabId: tabs[0].id,
    tabs,
  };

  changeSelected = (el: Tab) => {
    this.setState({
      selectedTabId: el.id,
    });
  };

  render() {
    return (
      <div className="App">
        <TabComponent
          tabs={this.state.tabs}
          selectedTabId={this.state.selectedTabId}
          changeSelected={this.changeSelected}
        />
      </div>
    );
  }
}

export default App;
