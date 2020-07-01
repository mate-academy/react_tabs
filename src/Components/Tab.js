import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  state = {
    title: this.props.title,
    onTab: this.props.onTabSelected,
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.state.onTab}
      >
        {this.state.title}
      </button>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func,
};

Tab.defaultProps = {
  onTabSelected: () => {},
};
