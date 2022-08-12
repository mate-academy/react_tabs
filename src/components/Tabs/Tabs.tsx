import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { id: currentId, content } = currentTab;

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames({ 'is-active': currentId === tab.id })}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
};
