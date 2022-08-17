import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const selectTabHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.length && tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === selectedTab.id },
              )}
              key={tab.id}
            >
              <a href={`#${tab.id}`} onClick={() => selectTabHandler(tab)}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
