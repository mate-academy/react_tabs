import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  changeTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTab,
    changeTab,
  } = props;

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li
            className="nav-item"
            key={tab.id}
          >
            <button
              className={classNames('nav-link',
                { active: tab.id === selectedTab.id })}
              type="button"
              onClick={() => changeTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="mx-auto border mt-1 p-2">
        {tabs.find(tab => tab.id === selectedTab.id)?.content}
      </p>
    </div>
  );
};
