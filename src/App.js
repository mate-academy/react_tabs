import React from 'react';
import { ButtonsList } from './components/ButtonsList';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    currentTab: tabs[0],
  }

  handleChooseContent = (event) => {
    const tabId = event.target.id;

    this.setState(
      {
        currentTab: tabs.find(tab => tab.id === tabId),
      },
    );
  }

  render() {
    const { currentTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected title is ${
            currentTab.title
          }`}
        </h1>
        <ButtonsList
          tabs={tabs}
          chooseContent={this.handleChooseContent}
          activeId={currentTab.id}
        />
        <div
          className="App__content"
        >
          {currentTab.content}
        </div>
      </div>
    );
  }
}

export default App;
