import React from 'react';

const Tab = (props) => {
  const {
    onClick, title, isActive,
  } = props;

  return (
    <button
      className={
        isActive
          ? 'tab-item tab-item--active'
          : 'tab-item'
      }
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Tab;
