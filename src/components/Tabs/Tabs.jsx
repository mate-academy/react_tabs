import React from 'react';
import classNames from 'classnames';

const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <ul>
    {tabs.map(
      tab => (
        <li
          className={classNames({active: tab.id === selectedTabId})}
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </li>
    ))}
  </ul>
);

export default Tabs;