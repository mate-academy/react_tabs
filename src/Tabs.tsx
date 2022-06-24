/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classnames from 'classnames';
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
              className={classnames({ 'is-active': selectedTabId === tab.id })}
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
      <p data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
