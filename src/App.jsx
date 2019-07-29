import React from 'react';
import './App.css';
import API_DATA from './api/API_DATA';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [],
    currentContent: [],
  };

  async componentDidMount() {
    const tabsWithIds = API_DATA.map((tab, index) => ({
      id: index,
      ...tab,
    }));

    this.setState({
      tabs: tabsWithIds,
    });
  }

  hendleClickShowContent = (id) => {
    this.setState(prevState => ({
      currentContent: prevState.tabs.find(tab => tab.id === id),
    }));
  }

  render() {
    const { tabs, currentContent } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          hendleClickShowContent={this.hendleClickShowContent}
          currentContent={currentContent}
        />
      </div>
    );
  }
}

export default App;
