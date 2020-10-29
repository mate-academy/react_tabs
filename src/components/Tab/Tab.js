import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tab.scss';

export class Tab extends React.PureComponent {
  render() {
    const { tabTitle, isSelected, hanleClick } = this.props;

    return (
      <button
        type="button"
        onClick={hanleClick}
        className={
          classNames(
            'tab',
            { 'tab--active': isSelected },
          )
        }
      >
        {tabTitle}
      </button>
    );
  }
}

Tab.propTypes = {
  tabTitle: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  hanleClick: PropTypes.func.isRequired,
};
