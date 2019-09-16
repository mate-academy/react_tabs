import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends React.Component {
    state = {
      tabId: 0,
    };

  handleTabSelect = (index) => {
    this.setState({
      tabId: index,
    });
  };

  render() {
    const { tabs } = this.props;
    const { tabId } = this.state;

    return (
      <div className="wrapper">
        {tabs.map(({ title }, i) => (
          <Tab
            handleClick={() => this.handleTabSelect(i)}
            key={title}
            title={title}
          />
        ))}
        <div className="text-container">
          {tabs[tabId].content}
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
