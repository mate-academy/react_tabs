// import { render } from 'node-sass';
import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
  { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor sit amet consectetur ' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    activeId: tabs[0].id,
  }

  chooseTab = (selectedId) => {
    this.setState({
      activeId: selectedId,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabs.find(tab => tab.id === this.state.activeId).title}

        </h1>
        <Tabs
          tabs={tabs}
          activeId={this.state.activeId}
          chooseTab={this.chooseTab}
        />
      </div>
    );
  }
}

export default App;
