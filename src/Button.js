import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ tab, handler, currentTab, index }) => {
  const currentClass
    = currentTab === index ? 'button button--active' : 'button';

  return (
    <button
      className={currentClass}
      onClick={handler}
      type="button"
    >
      {tab.title}
    </button>
  );
};

Button.propTypes = {
  tab: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Button;
