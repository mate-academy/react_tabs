import React from 'react';
import './App.css';
import { tabs } from './api/tabs';
import { Tabs } from './components/Tabs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleClick = indexTab => (
      this.setState({
        index: indexTab,
      }));
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <div className="tabs">
          <Tabs
            tabs={tabs}
            handleClick={this.handleClick}
            currentState={this.state.index}
          />
        </div>
        <div className="tabs__content">
          <p className="tabs__text">
            {tabs[this.state.index].content}
          </p>
        </div>
      </>
    );
  }
}

export default App;
