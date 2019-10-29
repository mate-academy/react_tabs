import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';

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
        <div>Some text: {this.state.activeTab}</div>
      </>
    );
  }
}

export default Main;
