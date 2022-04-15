import '../App.scss';
import React from 'react';

type Props = {
  selectTab: Tab,
  setSelectTab: (tab: Tab) => void,
  tabs: Tab[],
};

export const Tabs:React.FC<Props> = ({ selectTab, setSelectTab, tabs }) => {
  return (
    <div className="menu">
      <ul>
        {tabs.map(tab => (
          <li className="list">
            <button
              className="button"
              key={tab.id}
              type="button"
              onClick={() => (setSelectTab(tab))}
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
