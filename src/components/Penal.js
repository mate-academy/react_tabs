import React from 'react';
import Tabs from './Tabs';

class Penal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    return (
      <>
        <Tabs
          className="active item"
          tabs={this.state.tabs}
          onTabSelected={selectedIndex => (
            this.setState({ activeTab: selectedIndex }))}
        />
        <div className="ui bottom attached active tab segment">
          {this.state.activeTab || this.props.tabs[0].content}
        </div>
      </>
    );
  }
}

export default Penal;
