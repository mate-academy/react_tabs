import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    selectTab,
  } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <a
              href={tab.id}
              className={classNames('nav-link', {
                active: tab.id === selectedTabId,
              })}
              onClick={(event) => {
                event.preventDefault();
                selectTab(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-2">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
