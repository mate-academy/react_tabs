import React from 'react';
import './App.css';

import Tabs from './Tabs';
import Article from './Article';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedId: 1,
  };

  componentDidMount() {
    let id = 0;

    this.setState(prevState => ({
      tabs: prevState.tabs.map((tab) => {
        id += 1;

        return (
          { ...tab, id }
        );
      }),
    }));
  }

  onTabSelected = (id) => {
    this.setState({
      selectedId: id,
    });
  }

  render() {
    const { tabs, selectedId } = this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 className="main-title">Number of tabs: {tabs.length}</h1>
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <Tabs
              tabs={tab}
              key={tab.id}
              selectedId={selectedId}
              onTabSelected={this.onTabSelected}
            />
          ))}
        </ul>
        <Article tabs={tabs} selectedId={selectedId} />
      </div>
    );
  }
}

export default App;
