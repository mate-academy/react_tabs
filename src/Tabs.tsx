import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  changeTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  changeTab,
}) => {
  return (
    <div>
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <button
              type="button"
              className={tab.id === selectedTab.id ? 'active' : ''}
              /* I think, this is too simple a condition to using "classnames" library */
              onClick={() => changeTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p>
        {tabs.find(tab => tab.id === selectedTab.id)?.content}
      </p>
    </div>
  );
};
