import React from 'react';
import PropTypes from 'prop-types';

function Button({
  title, selectedTab, index, active,
}) {
  return (
    <button
      type="button"
      className={active ? 'active' : 'inective'}
      onClick={() => selectedTab(index)}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  selectedTab: PropTypes.func.isRequired,
};

export default Button;
