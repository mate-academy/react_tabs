import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import Content from "../Content/Content";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  onTabSelected = (selectedIndex) => {
    this.setState(state => ({
      ...state,
      activeTab: selectedIndex,
    }));
  };

  render() {
    return (
      <>
        <Tabs tabs={this.props.tabs}
          onTabSelected={this.onTabSelected}
        />
        <div>
          <Content activeTab={this.state.activeTab} />
        </div>
      </>
    );
  }
}

export default Main;
