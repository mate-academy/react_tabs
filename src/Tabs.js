import React from 'react';
import TabNav from './TabNav';

class Tabs extends React.Component {
  state = {
    selectedIndex: 0,
  };

  changeTab = (selectedIndex) => {
    this.setState({
      selectedIndex,
    });
  };

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div>
        <TabNav list={tabs} select={this.changeTab} />
        <div className="tab">
          {tabs[selectedIndex].content}
        </div>
      </div>
    );
  }
}

export default Tabs;
