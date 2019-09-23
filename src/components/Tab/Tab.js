import React from 'react';

const Tab = (props) => {
  const {
    handleClick, title, activeTab, id,
  } = props;

  return (
    <button
      className={
        activeTab === id
          ? 'tab-item tab-item--active'
          : 'tab-item'
      }
      type="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Tab;
