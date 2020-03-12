import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const { tabIndex } = this.state;
    const { tabs } = this.props;

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.content}
              title={tab.title}
              index={index}
              isActive={index === tabIndex}
              selectTab={this.onTabSelected}
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
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
