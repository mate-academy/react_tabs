import React from 'react';
import { Tab } from '../typeTab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected:(tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const onClickHandle = (tab:Tab) => {
    if (findTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={findTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onClickHandle(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findTab.content}
      </div>
    </div>
  );
};
