import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  state = {
    index: 0,
  }

  tabSwitch = (tabIndex) => {
    this.setState({
      index: tabIndex,
    });
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="tabs">
        <Tab
          tabs={tabs}
          tabSwitch={this.tabSwitch}
          tabIndex={index}
        />
        <div className="tabs__container">
          {tabs[index].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tabs;
