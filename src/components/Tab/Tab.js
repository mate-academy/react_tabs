import React from 'react';

const Tab = ({ tab, clickFunction, index, active }) => (
  <button
    type="button"
    className={index === active ? 'tab-item active' : 'tab-item'}
    onClick={clickFunction}
  >
    {tab.title}
  </button>
);

export default Tab;
