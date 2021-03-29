import React from 'react';
import { ButtonList } from './components/ButtonList/ButtonList';
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
    selectedTab: tabs[0],
  }

  handleSelect = (elementId) => {
    this.setState({
      selectedTab: tabs.find(
        currentElement => currentElement.id === elementId,
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          selectedTab:&nbsp;
          {this.state.selectedTab.title}
        </h1>

        <ul className="App__list-tabs list">
          <ButtonList
            tabs={tabs}
            clickHandle={this.handleSelect}
            activeTab={this.state.selectedTab.title}
          />
        </ul>

        <p>
          {this.state.selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
