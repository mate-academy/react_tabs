import classNames from 'classnames';
import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div>
      <div className="tabs">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
