import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Tabs } from './Components/Tabs';
import './App.scss';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onChange = (id) => {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === id),
    });
  }

  render() {
    return (
      <>
        <h1>
          {`Selected tab is ${this.state.selectedTab.title}`}
        </h1>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <Tabs
            tabs={tabs}
            onChange={this.onChange}
            selectedTab={this.state.selectedTab}
          />
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <LoremIpsum />
          </div>
        </div>
      </>
    );
  }
}

export default App;
