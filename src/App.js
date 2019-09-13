import React from 'react';

import Tabs from './components/Tabs';
import Tab from './components/Tab';

import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    visibleContentTab: 0,
  };

  onTabSelected = num => this.setState({ visibleContentTab: num });

  render() {
    const { tabs, visibleContentTab } = this.state;
    const { onTabSelected } = this;
    const mapArr = tabs.map(tab => (
      <Tab
        key={tab.title}
      >
        {tab.content}
      </Tab>
    ));

    return (
      <div className="App">
        <Tabs>
          <div className="tab-list">
            {tabs.map((tab, index) => (
              <button
                type="button"
                onClick={() => onTabSelected(index)}
                className="tab"
              >
                {tab.title}
              </button>
            ))}
          </div>

          {mapArr.find((tab, index) => (
            visibleContentTab === index
          ))}
        </Tabs>
      </div>
    );
  }
}

export default App;
