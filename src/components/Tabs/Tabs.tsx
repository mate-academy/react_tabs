import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  handleSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, handleSelected },
) => {
  const checkHandleSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      handleSelected(tab);
    }
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              { 'is-active': selectedTabId === tab.id },
            )}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => checkHandleSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
