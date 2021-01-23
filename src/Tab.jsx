import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tab = ({
  title, isActive, onTabChange, children, index,
}) => (
  <button
    className={classNames(['button', {
      'button--active': isActive,
    }])}
    key={title}
    type="button"
    onClick={() => onTabChange(children, index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onTabChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape()),
  index: PropTypes.number.isRequired,
};

Tab.defaultProps = {
  children: {},
};
