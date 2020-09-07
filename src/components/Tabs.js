import React from 'react';
import './Tabs.css';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: 1,
  }

  render() {
    const { tabs } = this.props;
    const { selectedTab } = this.state;

    return (
      <div className="tabs">
        <nav className="titles">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={ClassNames({
                tab: true,
                'tab--selected': tab.id === selectedTab,
              })}
              onClick={() => {
                this.setState({ selectedTab: tab.id });
              }}
            >
              {tab.title}
            </button>
          ))}
        </nav>
        <p className="content">
          {this.props.tabs.find(
            tab => tab.id === selectedTab,
          ).content}
        </p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
