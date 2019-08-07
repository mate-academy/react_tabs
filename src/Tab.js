import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  onClick = () => {
    const {
      title,
      onClick,
    } = this.props;

    onClick(title);
  };

  render() {
    const {
      props: {
        activeTab,
        title,
      },
    } = this;

    const className = activeTab === title ? 'active' : '';

    return (
      <li
        className={className}
      >
        <button
          type="button"
          onClick={this.onClick}
        >
          {title}
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
