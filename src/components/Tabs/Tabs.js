import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab/Tab';
import { TabShape } from '../shapes/TabShape';

import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__list">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              tab={tab}
              isTabActive={activeTab === index}
              onTabSelected={() => this.onTabSelected(index)}
            />
          ))}
        </div>
        <div className="tabs__text">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabShape).isRequired,
};
