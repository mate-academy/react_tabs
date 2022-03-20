import { useState } from 'react';
import { tabs } from '../tabs';
import '../App.scss';

export const Tabs = () => {
  const [selectTab, setSelectTab] = useState(tabs[0]);

  return (
    <div className="menu">
      <h1>
        Selected tab is
        {` ${selectTab.title}`}
      </h1>
      <ul>
        {tabs.map(tab => (
          <li className="list">
            <button
              className="button"
              key={tab.id}
              type="button"
              onClick={() => (setSelectTab(tabs[+tab.id.slice(-1) - 1]))}
            >
              {tab.title}
            </button>
            {selectTab.title === tab.title && selectTab.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
