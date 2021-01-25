import React from 'react';
import './App.css';
import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.Component {
  state = {
    visibleTabs: preparedTabs,
    content: '',
  }

  onChange = (tabId) => {
    this.setState(state => ({
      content: state.visibleTabs.find(tab => tab.id === tabId).content,
    }));
  }

  render() {
    const { visibleTabs, content } = this.state;

    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tabs
          tabs={visibleTabs}
          onChange={this.onChange}
          content={content}
        />
        <div className={content && 'tab-content'}>{content}</div>
      </div>
    );
  }
}

export default App;
