import classNames from 'classnames';
import React from 'react';

interface Props {
  selectedTab: Tab;
  tabs: Tab[];
  changeTab: (value: string) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTab, tabs, changeTab } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <a
              href={tab.id}
              onClick={(event) => {
                event.preventDefault();
                changeTab(tab.id);
              }}
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTab.id,
              })}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <p>
        {selectedTab.content}
      </p>
    </>
  );
};
