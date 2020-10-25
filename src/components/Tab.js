/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;

    onClick(label);
  }

  render() {
    const { label, activeTab } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        onClick={this.onClick}
        className={classNames(
          'tab',
          { activeTab: activeTab === label },
        )}
      >
        {label}
      </li>
    );
  }
}

export default Tab;