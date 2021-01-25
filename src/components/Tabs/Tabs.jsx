import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';

export class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  onTabSelected = (event) => {
    this.setState({
      activeTab: Number(event.target.value),
    });
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tab">
        {tabs.map((tab, index) => (
          <button
            type="button"
            onClick={this.onTabSelected}
            value={index}
            className={classNames('tab__heading', { 'tab__heading--active': activeTab === index })}
          >
            {tab.title}
          </button>
        ))}
        <div className="tab__content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
