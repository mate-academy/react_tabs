import React, { Component } from 'react';
import SingleTab from './SingleTab';
import SingleContent from './SingleContent';

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

  render() {
    const allTabs = this.props.tabs;

    return (
      <div className="wrapper">
        <div className="ui top attached tabular menu">
          {allTabs.map((tab, index) => (
            <SingleTab
              onTabSelected={() => this.onTabSelected(tab.id)}
              active={this.state.activeTab === index}
              title={tab.title}
              key={tab.id}
            />
          ))
          }
        </div>
        {allTabs.map((tab, index) => (
          <SingleContent
            onTabSelected={() => this.onTabSelected(tab.id)}
            content={tab.content}
            active={this.state.activeTab === index}
            key={tab.id}
          />
        ))
        }
      </div>
    );
  }
}

export default Tabs;
