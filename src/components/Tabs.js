import React, { Component } from 'react';

const tabs = [
  { title: 'Ноme', content: 'Some text 1' },
  { title: 'Profile', content: 'Some text 2' },
  { title: 'Contacts', content: 'Some text 3' },
];

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onTabSelected = (tabNum) => {
    this.setState(prev => ({
      ...prev,
      activeTab: tabNum,
    }));
  };

  updateTabClassName = (tab) => {
    if (this.state.activeTab === tab) {
      return 'item active';
    }

    return 'item';
  }

  updateTextClassName = (tab) => {
    if (this.state.activeTab === tab) {
      return 'ui bottom attached active tab segment';
    }

    return 'ui bottom attached tab segment';
  }

  render() {
    return (
      <div className="wrapper">
        <div className="ui top attached tabular menu">
          <div onClick={() => this.onTabSelected(0)} className={this.updateTabClassName(0)}>{tabs[0].title}</div>
          <div onClick={() => this.onTabSelected(1)} className={this.updateTabClassName(1)}>{tabs[1].title}</div>
          <div onClick={() => this.onTabSelected(2)} className={this.updateTabClassName(2)}>{tabs[2].title}</div>
        </div>
        <div onClick={() => this.onTabSelected(0)} className={this.updateTextClassName(0)}>
          <h1>{tabs[0].content}</h1>
        </div>
        <div onClick={() => this.onTabSelected(1)} className={this.updateTextClassName(1)}>
          <h1>{tabs[1].content}</h1>
        </div>
        <div onClick={() => this.onTabSelected(2)} className={this.updateTextClassName(2)}>
          <h1>{tabs[2].content}</h1>
        </div>
      </div>
    );
  }
}

export default Tabs;
