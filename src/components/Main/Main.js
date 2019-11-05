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

  render() {
    return (
      <>
        <Tabs tabs={this.props.tabs}
          onTabSelected={selectedIndex => this.setState({activeTab: selectedIndex })} />
        <div>
          <Content activeTab={this.state.activeTab} />
        </div>
      </>
    );
  }
}

export default Main;
