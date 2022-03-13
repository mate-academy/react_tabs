import React from 'react';
import { Tab } from './Types/Tab';
import './Tabs.scss';

type Props = {
  tabsArr: Tab[];
  changeTab: (tab: Tab) => void,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({
  tabsArr,
  changeTab,
  selectedTab,
}) => {
  const clicker = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      return changeTab(tab);
    }

    return null;
  };

  return (
    <ul className="list">
      {tabsArr.map(tab => (
        <>
          <li key={tab.id} className="list__item">
            <button
              type="button"
              onClick={() => clicker(tab)}
            >
              {tab.title}
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};
