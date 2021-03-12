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
    currentTabs: [...tabs],
    activeId: 'tab-1',
    currentContent: '',
  }

  componentDidMount() {
    this.setState((state) => {
      const newContent = state.currentTabs
        .find(tab => tab.id === state.activeId).content;

      return ({ currentContent: newContent });
    });
  }

  HandleChooseContent = (event) => {
    const tabId = event.target.id;

    this.setState(state => (
      {
        currentContent: state.currentTabs.find(tab => tab.id === tabId).content,
        activeId: tabId,
      }
    ));
  }

  render() {
    const { currentTabs, currentContent, activeId } = this.state;

    return (
      <div className="App">
        <ButtonsList
          tabs={currentTabs}
          chooseContent={this.HandleChooseContent}
          activeId={activeId}
        />
        <div
          className="App__content"
        >
          {currentContent}
        </div>
      </div>
    );
  }
}

export default App;
