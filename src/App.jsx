import React from 'react';

import { TabsList } from './components/TabsList';

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
  }

  componentDidMount() {
    const { title, content } = tabs.find(tab => tab.id === 'tab-1');

    this.setTitle(title, content);
  }

  setTitle = (selectedTab, content) => {
    if (selectedTab !== this.state.selectedTab) {
      this.setState({
        selectedTab,
        content,
      });
    }
  }

  render() {
    const { selectedTab, content } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>

        <div className="container">

          <TabsList
            selectedTab={selectedTab}
            tabsList={tabs}
            setTitle={this.setTitle}
          />
          <div className="content">
            {content}
          </div>

        </div>

      </div>

    );
  }
}

export default App;
