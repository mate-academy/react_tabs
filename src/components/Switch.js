import React from 'react';
import PropTypes from 'prop-types';

export const Switch = (props) => {
  const { active, title, activate, tabulate } = props;

  return (
    <button
      type="button"
      className={active ? ' tab__element active' : 'tab__element'}
      onClick={activate}
      onKeyUp={tabulate}
    >
      {title}
    </button>
  );
};

Switch.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  activate: PropTypes.func.isRequired,
  tabulate: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  active: false,
};

export default Switch;
