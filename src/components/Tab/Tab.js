import React from 'react';
import './Tab.css';

function Tab({
  handleClick, title, activeItem, index,
}) {
  return (
    <button
      className={
        activeItem === index
          ? 'button button--active'
          : 'button'
      }
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Tab;
