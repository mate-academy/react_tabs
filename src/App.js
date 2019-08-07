import React from 'react';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabId: 0,
  };

  handleTabChange = (tabId) => {
    this.setState({
      currentTabId: tabId,
    });
  };

  render() {
    const { tabs, currentTabId } = this.state;

    return (
      <div className="App">
        <h1>React Tabs</h1>
        <Tabs
          tabs={tabs}
          handleTabChange={this.handleTabChange}
          currentTabId={currentTabId}
        />
        <p>{tabs[currentTabId].content}</p>
      </div>
    );
  }
}

export default App;
