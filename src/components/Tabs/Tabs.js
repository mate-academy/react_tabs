import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Tabs extends Component {
  state = {
    currentTab: this.props.tabs[0].title,
  }

  tabToggler = (tab) => {
    this.setState({ currentTab: tab.title });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs">
        <div className="tabs__tabrow">
          {tabs.map(tab => (
            <button
              key={tab.title}
              className={classNames({
                tabs__btn: true,
                tabs__btn_active: tab.title === this.state.currentTab,
              })}
              type="button"
              onClick={() => {
                this.tabToggler(tab);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs__contentrow">
          {tabs.find(tab => tab.title === this.state.currentTab).content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
