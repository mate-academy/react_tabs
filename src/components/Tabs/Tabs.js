import React from 'react';
import Tab from '../Tab/Tab';

import './Tabs.css';

const Tabs = ({ tabs, currentTab, handleClick, changeClassName }) => {
  return (
    <div className="tabs__wrapper">
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <Tab tab={tab} handleClick={handleClick} index={index} changeClassName={changeClassName} />
        ))}
      </ul>
      <div className="tabs__content">
        {tabs[currentTab].content}
      </div>
    </div>
  )
}

export default Tabs;