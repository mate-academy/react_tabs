import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export default class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }

  state = {
    currentTab: 0,
  }

  render() {
    const { currentTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        {tabs.map((tab, index) => (
          <button
            className={currentTab === index ? 'button--active' : 'button'}
            type="button"
            key={tab.title}
            onClick={() => this.setState({ currentTab: index })}
          >
            {tab.title}
          </button>
        ))}
        <p className="content">{tabs[currentTab].content}</p>
      </div>
    );
  }
}
