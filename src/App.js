import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

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
    tabsOnPage: preparedTabs,
    content: '',
  }

  handlerOnClock = (tabId) => {
    this.setState(state => ({
      content: state.tabsOnPage.find(tab => tab.id === tabId).content,
    }));
  }

  render() {
    const { content, tabsOnPage } = this.state;

    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="btn-group" role="group">
          <Tabs
            tabs={tabsOnPage}
            onClick={this.handlerOnClock}
          />
        </div>
        <p>{content}</p>
      </div>
    );
  }
}

export default App;
