import React from 'react';

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
    selectedTab: tabs[0],
  }

  onChange(clickedTab) {
    if (this.state.selectedTab.id !== clickedTab.id) {
      this.setState({
        selectedTab: clickedTab,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <ul className="list-group list-group-horizontal">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className="list-group-item list-group-item-action"
              type="button"
              onClick={() => this.onChange(tab)}
            >
              <h1>
                {tab.title}
              </h1>
            </button>
          ))}
        </ul>

        <p>
          {this.state.selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
