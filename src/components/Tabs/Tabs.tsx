import classNames from 'classnames';
import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (currentTab:Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
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
      <p>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
