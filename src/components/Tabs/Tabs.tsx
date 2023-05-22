import React from 'react';
import { Tab } from '../../Tupes/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const setSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={selectedTabId === tab.id
              ? 'is-active'
              : ''}
            data-cy="Tab"
          >
            <a
              onClick={() => setSelect(tab)}
              href={`#tab-${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </>
  );
};
