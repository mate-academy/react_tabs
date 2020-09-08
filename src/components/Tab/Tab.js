import React from 'react';
import PropTypes from 'prop-types';

export class Tab extends React.PureComponent {
  render() {
    return (
      <>
        <li
          className={this.props.activeTab
            ? 'nav-item active'
            : 'nav-item'}
        >
          <button
            type="button"
            key={this.props.title}
            className="nav-link"
            onClick={this.props.click}
          >
            {this.props.title}
          </button>
        </li>
      </>
    );
  }
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func,
  activeTab: PropTypes.bool,
};

Tab.defaultProps = {
  click: () => '',
  activeTab: false,
};
