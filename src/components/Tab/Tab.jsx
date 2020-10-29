import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tab = ({ handleClick, title, children, isActive }) => (
  <button
    className={classNames({
      app__tab: true,
      active: isActive,
    })}
    type="button"
    onClick={() => handleClick(children, title)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Tab.defaultProps = {
  handleClick: () => {},
};
