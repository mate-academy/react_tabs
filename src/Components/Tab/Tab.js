import React from 'react';
import { tabPropTypes } from '../PropTypes/PropTypes';
import './Tab.css';

function Tab({
  handleClick, title, isActive, index,
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        isActive === index
          ? 'button--active'
          : 'button'}
    >
      {title}
    </button>
  );
}

Tab.propTypes = tabPropTypes;

export default Tab;
