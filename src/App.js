import React from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  title = tabs => tabs.map(tabItem => (
    <Tab>{tabItem.title}</Tab>
  ));

  content = tabs => tabs.map(tabItem => (
    <TabPanel>{tabItem.content}</TabPanel>
  ));

  setIndex = tabs => tabs.map((tabItem, i) => (
    {
      ...tabItem,
      index: i,
    }
  ));

  onTabSelected = () => {
    this.setState(prevState => ({
      tabs: this.setIndex(prevState.tabs),
    }));
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs>
          <TabList onClick={this.onTabSelected}>
            {this.title(tabs)}
          </TabList>

          {this.content(tabs)}
        </Tabs>
      </div>
    );
  }
}

export default App;
