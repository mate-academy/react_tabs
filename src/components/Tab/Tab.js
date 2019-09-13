import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

function Tab({
  handleClick, title, currentActive, index,
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        currentActive === index
          ? 'button--active'
          : 'button'}
    >
      {title}
    </button>
  );
}

Tab.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  currentActive: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
