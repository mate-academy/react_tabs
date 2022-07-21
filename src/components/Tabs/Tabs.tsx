import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../react-app-env';

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
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames('', {
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

      <div className="block" data-cy="tab-content">
        {selectedTabId.content}
      </div>
    </div>
  );
};
