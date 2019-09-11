import React from 'react';
import './App.css';
import TabsList from './components/TabsList/TabsList';

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
        <h1>{`${tabs.length} tabs`}</h1>
        <TabsList activeTabTitle={tabs[0].title}>
          {tabs}
        </TabsList>
      </div>
    );
  }
}

export default App;
