import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  selectedTabId: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div className="tabs is-boxed tab-container">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': tab.id === selectedTabId.id,
            })}
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

    </div>

  );
};
