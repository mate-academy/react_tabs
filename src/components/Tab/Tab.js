import React from 'react';

const Tab = ({ tab, clickFunction, index, active }) => {
  return(
    <li className={index === active ? 'tab-item active' : 'tab-item'} onClick={clickFunction}>
        {tab.title}
    </li>
  );
}

export default Tab;
