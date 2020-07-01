import React from 'react';
import PropTypes from 'prop-types';

export const Switch = (props) => {
  const { active, title, handleClick, tabPress } = props;

  return (
    <button
      type="button"
      className={active ? ' tab__element active' : 'tab__element'}
      onClick={handleClick}
      onKeyUp={tabPress}
    >
      {title}
    </button>
  );
};

Switch.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  tabPress: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  active: false,
};

export default Switch;
