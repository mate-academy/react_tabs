import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: 'Tab 1',
  };

  onTabSelected = (activeTab) => {
    this.setState({
      selectedTab: activeTab,
    });
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;

    return (
      <div>
        {tabs.map(tab => (
          <div
            className="tabButton"
            key={tab.title}
          >
            <button
              type="submit"
              onClick={() => this.onTabSelected(tab.title)}
            >
              {tab.title}
            </button>
          </div>
        ))}

        <div>
          {tabs.find(tab => tab.title === selectedTab).content}
        </div>
      </div>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
