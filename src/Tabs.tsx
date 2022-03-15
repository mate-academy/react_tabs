import React from 'react';
import { Tab } from './Types/Tab';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  changeTab: (tab: Tab) => void,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  changeTab,
  selectedTab,
}) => {
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      return changeTab(tab);
    }

    return null;
  };

  return (
    <ul className="list">
      {tabs.map(tab => (
        <li key={tab.id} className="list__item">
          <button
            type="button"
            onClick={() => handleClick(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
