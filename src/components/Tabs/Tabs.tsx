import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../Tab';

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
  const currentTab = () => {
    const foundTab = tabs.find(tab => tab.id === selectedTabId);

    return foundTab || tabs[0];
  };

  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': currentTab().id === tab.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  selectTab(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab().content}
      </div>
    </>
  );
};
