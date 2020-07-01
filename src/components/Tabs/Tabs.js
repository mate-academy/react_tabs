import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';
import { Tab } from '../Tab/Tab';

export class Tabs extends React.Component {
  state = {
    activeTab: 1,
  }

  handleTabSwitch = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.title}
            title={tab.title}
            isSelected={activeTab === index}
            onSelect={() => this.handleTabSwitch(index)}
          />
        ))}
        <p className="content">
          {tabs[this.state.activeTab].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
