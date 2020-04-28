import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  };

  handleTabSelection = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabs } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className="tabs__container">
        <div className="tabs__nav">
          {tabs.map((tab, index) => (
            <Tab
              title={tab.title}
              key={tab.title}
              index={index}
              isActive={index === tabIndex}
              selectTab={this.handleTabSelection}
            />
          ))}
        </div>
        <div className="tabs__content">
          {tabs[tabIndex].content}
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

export default Tabs;
