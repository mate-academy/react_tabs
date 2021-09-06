import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (index: string) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab.id)}
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTab.id,
              })}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="p-2">
        {selectedTab.content}
      </p>
    </>
  );
};
