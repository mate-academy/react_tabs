import React from 'react';
import './App.css';
import Tabs from "./components/Tabs";
import Content from "./components/Content";

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabIndex: 0,
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="container">
        <Tabs
          tabs={tabs}
          onTabSelected={(tabData) => {
            this.setState(state => ({
              ...state,
              currentTabIndex: tabData,
            }));
          }
          }
        />
        {/*<div className="content_container">*/}
        {/*  {this.state.tabs[this.state.currentTabIndex].title}*/}
        {/*</div>*/}
        <Content state={this.state} />
      </div>
    );
  }
}

export default App;
