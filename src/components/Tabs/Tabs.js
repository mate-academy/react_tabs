import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  state ={
    activeTab: 0,
  };

  onClickTabSelection = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__menu">
          {tabs.map((tab, index) => (
            <Tab
              title={tab.title}
              key={tab.index}
              index={index}
              isActive={index === activeTab}
              selectTab={this.onClickTabSelection}
            />
          ))}
        </div>
        <div className="tabs__content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
