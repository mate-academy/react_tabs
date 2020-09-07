import React from 'react';
import './Tabs.css';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: 1,
  }

  render() {
    return (
      <div className="tabs">
        <nav className="titles">
          {this.props.tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={ClassNames({
                tab: true,
                'tab--selected': tab.id === this.state.selectedTab,
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
            tab => tab.id === this.state.selectedTab,
          ).content}
        </p>
      </div>
    );
  }
}

/* .find(
            tab => tab.id === this.setState.selectedTab
          ).content */
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
