import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state = {
    index: 0,
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <div className="tabs">
        {tabs.map(tab => (
          <button
            className={
              `tabs__button ${index === tab.id ? 'tabs__button--active' : ''}`
            }
            type="button"
            onClick={() => {
              this.setState({ index: tab.id });
            }}
          >
            {tab.title}
          </button>
        ))}

        <p className="tabs__text">
          {tabs.find(
            tab => tab.id === index,
          ).content}
        </p>
      </div>
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
