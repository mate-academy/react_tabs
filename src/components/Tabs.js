import React from 'react';
import './Tabs.css';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  state = {
    selectedTab: this.props.tabs[0].title,
    content: this.props.tabs[0].content,
  }

  render() {
    return (
      <div className="tabs">
        <nav className="titles">
          {this.props.tabs.map(tab => (
            <button
              type="button"
              className={ClassNames({
                tab: true,
                'tab--selected': tab.title === this.state.selectedTab,
              })}
              onClick={() => {
                this.setState({
                  selectedTab: tab.title,
                  content: tab.content,
                });
              }}
            >
              {tab.title}
            </button>
          ))}
        </nav>
        <p className="content">{this.state.content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};
