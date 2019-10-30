import React from 'react';
import Tabs from './Tabs';

class Penal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  selectTab = (selectedIndex) => {
    (this.setState({ activeTab: selectedIndex }));
  }

  render() {
    return (
      <>
        <Tabs
          className="active item"
          tabs={this.props.tabs}
          onTabSelected={this.selectTab}
        />
        <div className="ui bottom attached active tab segment">
          {this.state.activeTab || this.props.tabs[0].content}
        </div>
      </>
    );
  }
}

export default Penal;
