import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends React.Component {
    state = {
      // tabs: this.props.tabs, - весь массив tabs
      tabIndex: 0,
    };

  activeTab = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs__wrap">
        {this.props.tabs.map((item, index) => (
          <Tab
            key={item.title}
            index={index}
            item={item}
            activeTab={this.activeTab}
            tabIndex={this.state.tabIndex}
          />
        ))}
        <p className="tabs__content">
          {tabs[this.state.tabIndex].content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
