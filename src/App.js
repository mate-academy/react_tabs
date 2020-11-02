import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { tabs } from './api/tabs';
import { Tabs } from './components/Tabs';

class App extends React.Component {
  state = {
    tabsList: tabs,
    currentTab: tabs[1],
  }

  handleSelectTab = (tab) => {
    this.setState({
      currentTab: tab,
    });
  }

  render() {
    const { tabsList, currentTab } = this.state;

    return (
      <div>
        <div>
          <h1>React tabs</h1>
          <Tabs
            tabsList={tabsList}
            currentTab={currentTab}
            handleSelectTab={this.handleSelectTab}
          />
          <div className="ui bottom attached active tab segment">
            {currentTab.content}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
