import React from 'react';
import classnames from 'classnames';
import { Tab } from '../react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="box">
      <div className="tabs is-centered is-toggle is-toggle-rounded is-large">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classnames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <a
                href="#t"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="message is-link">
        <p className="message-body subtitle is-3" data-cy="tab-content">
          {findTab?.content}
        </p>
      </div>
    </div>
  );
};
