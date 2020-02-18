import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state = {
    tabs: [...this.props.tabs],
    activeTab: 0,
  };

  render() {
    const { tabs, activeTab } = this.state;
    const currentTab = tabs[activeTab];

    return (
      <>
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => {
              this.setState({ activeTab: index });
            }}
          >
            {tab.title}
          </button>
        ))}
        <p>{currentTab.content}</p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
