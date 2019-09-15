import React from 'react';
import './App.css';
import Tabs from './Tabs/Tabs';
import Tab from './Tab/Tab';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>
        <Tabs>
          {tabs.map(tab => (
            <Tab key={tab.title} title={tab.title}>
              {tab.content}
            </Tab>
          ))}
        </Tabs>
        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs (*)</h1>
        <Tabs>
          <Tab title="Tab 2">
            It could be a text
          </Tab>

          <Tab title="Tab 3">
            <div>1</div>
            <div>2</div>
          </Tab>

          <Tab title="Tab 1">
            Or even any JSX
            <Tab>test</Tab>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
