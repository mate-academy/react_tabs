import React from 'react';
import './Tab.css';

const Tab = ({ tab, handleClick, index, changeClassName }) => {
  return (
    <li className={changeClassName} onClick={() => handleClick(index)}>
      {tab.title}
    </li>
  )
}

export default Tab;