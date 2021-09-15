import React from 'react';
import classNames from 'classnames';

interface Props {
  selectedTab: Tab
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTab, tabs, onTabSelected } = props;

  return (
    <>
      <h1>
        {'Selected tab is '}
        {selectedTab.title}
      </h1>

      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <button
              type="submit"
              onClick={() => onTabSelected(tab)}
              className={classNames(
                'nav-link',
                {
                  active: selectedTab.id === tab.id,
                },
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{selectedTab.content}</p>
    </>
  );
};
