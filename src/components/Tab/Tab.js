import React from 'react';
import './Tab.css';

const Tab = ({
  handleClick,
  title,
  activeItem,
  index,
}) => (

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

export default Tab;
