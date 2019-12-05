/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';
import Content from '../Content';

export default class Tabs extends Component {
  state = { activeTab: 0 };

  constructor(props) {
    super(props);
    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected(index) {
    this.setState(state => ({
      ...state,
      activeTab: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        {tabs.map((tab, index) => (
          <Tab
            selectedTab={() => this.onTabSelected(index)}
            title={tab.title}
            activeTab={activeTab}
          />
        ))}
        <Content tabs={tabs} index={activeTab} />
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
};
