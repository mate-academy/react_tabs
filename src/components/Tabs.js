import React from 'react';
import PropTypes from 'prop-types';
import { Tab, tabTypes } from './Tab';

import './Tabs.scss';

class Tabs extends React.Component {
  state = {
    tabs: this.props.tabs,
    tabIndex: 0,
  }

  selectedTab = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs, tabIndex } = this.state;

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.content}
              title={tab.title}
              index={index}
              isActive={index === tabIndex}
              hadler={this.selectedTab}
            />
          ))}
        </div>
        <p className="tabs__content">
          {tabs[tabIndex].content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabTypes).isRequired,
};

export default Tabs;
