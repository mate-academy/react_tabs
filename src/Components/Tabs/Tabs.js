import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';

export class Tabs extends React.PureComponent {
  state = {
    indexOfTab: 0,
  };

  selectedTab = (index) => {
    this.setState({
      indexOfTab: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { indexOfTab } = this.state;

    return (
      <div className="tabs">
        <div className="tabs__list">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              tab={tab}
              index={index}
              indexOfTab={indexOfTab}
              selectedTab={this.selectedTab}
            />
          ))}
        </div>
        <div className="tabs__content">{tabs[indexOfTab].content}</div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
