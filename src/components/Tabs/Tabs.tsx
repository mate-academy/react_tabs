import React from 'react';
import classNames from 'classnames';
import Tab from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  tabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  tabSelected,
}) => {
  let tabId = tabs.find(tab => tab.id === selectedTabId)?.id;

  if (!tabId) {
    tabId = tabs[0].id;
  }

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames(
                {
                  'is-active': tab.id === tabId,
                },
              )}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    tabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
