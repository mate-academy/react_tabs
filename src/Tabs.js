import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export class Tabs extends React.Component {
  state = {
    index: 0,
    content: this.props.tabs[0].content,
  }

  onTabSelected = (tabIndex, tabContent) => {
    this.setState({
      index: tabIndex,
      content: tabContent,
    });
  }

  render() {
    const { tabs } = this.props;
    const { content, index } = this.state;

    return (
      <>
        <div className="tabs">
          {tabs.map((tab, indx) => (
            <button
              className={classNames('button', { active: index === indx })}
              key={tab.title}
              type="button"
              onClick={() => this.onTabSelected(indx, tab.content)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <p className="text">
          {content}
        </p>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
