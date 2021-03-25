import React from 'react';
import Tabs from './components/Tabs';

import './App.scss';
/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: '1',
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is Tab&nbsp;
          {this.state.selectedTabId}
        </h1>
        {
          tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              id={index + 1}
              className={
                (index + 1 === +this.state.selectedTabId) ? 'active' : ''
              }
              onClick={
                (event) => {
                  this.setState({
                    selectedTabId: event.target.id,
                  });
                }
              }
            >
              {tab.title}
            </button>
          ))
        }
        <Tabs
          tabs={tabs}
          selected={this.state.selectedTabId}
        />
      </div>
    );
  }
}

export default App;
