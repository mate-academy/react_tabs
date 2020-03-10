import React from 'react';
import PropTypes from 'prop-types';

function Tab({ title, index, handler, isActive }) {
  return (
    <button
      type="button"
      className={`tabs__button ${isActive ? 'tabs__button--active' : ''}`}
      onClick={() => {
        handler(index);
      }}
    >
      {title}
    </button>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tab;
