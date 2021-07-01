import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tabs extends Component {
  state = {};

  static = {
    propTypes: {
      tabs: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
      content: PropTypes.string.isRequired,
      onTabSelected: PropTypes.func.isRequired,
    },
  };

  render() {
    const { tabs, content, onTabSelected } = this.props;

    return (
      <>
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        ))}

        <p>{content}</p>

      </>
    );
  }
}
