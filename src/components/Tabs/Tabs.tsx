import { FC } from 'react';
import cn from 'classnames';
import { TabType } from './type';

interface Props {
  tabs: TabType[];
  selectedTabId: string;
  setSelectedTab: (tab: TabType) => void;
}

export const Tabs:FC<Props> = ({ tabs, selectedTabId, setSelectedTab }) => {
  const selectedTab = tabs.find((tab) => (
    tab.id === selectedTabId
  )) || tabs[0];

  const handleTabClick = (tab:TabType) => {
    if (tab.id !== selectedTabId) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabClick(tab)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
