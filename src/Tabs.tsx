/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={
                selectedTabId === tab.id
                  ? 'is-active'
                  : ''
              }
            >
              <a
                href="#"
                type="button"
                onClick={() => {
                  if (selectedTabId === tab.id) {
                    return;
                  }

                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {tabs.map(tab => (
        <React.Fragment key={tab.id}>
          {tab.id === selectedTabId
          && <p data-cy="tab-content">{tab.content}</p>}
        </React.Fragment>
      ))}
    </>
  );
};
