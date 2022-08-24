import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const newSelectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelect = (newTab: Tab) => {
    if (newTab.id !== selectedTabId) {
      onTabSelected(newTab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li className={tab.id === newSelectedTab.id ? 'is-active' : ''}>
              <a href={`#${tab.id}`} onClick={() => handleSelect(tab)}>
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {newSelectedTab.content}
      </div>
    </div>
  );
};
