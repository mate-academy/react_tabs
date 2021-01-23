import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    currentTab: 0,
  };

  setTab = (index) => {
    this.setState({ currentTab: index });
  };

  render() {
    const { tabsFromApp } = this.props;
    const { currentTab } = this.state;

    return (
      <div className="tabs">
        {tabsFromApp.map((tab, i) => (
          <>
            <button
              className={`tabs__button ${currentTab === i ? 'selected' : ''}`}
              type="button"
              key={tab.title}
              onClick={() => this.setTab(i)}
            >
              {tab.title}
            </button>
          </>
        ))}
        <div className="tabs__content">
          <p>
            {tabsFromApp[currentTab].content}
          </p>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabsFromApp: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
