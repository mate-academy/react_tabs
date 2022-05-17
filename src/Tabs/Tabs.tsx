import React from 'react';
import './Tabs.scss';

type Props = {
  allTabs: Tab[],
  selectedTabId: string,
  onTabSelected: (Object: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  allTabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs">
      {allTabs.map((tab) => (
        <>
          <li className="Tabs__item" key={tab.id}>
            <div className="Tabs__item--text">
              {selectedTabId === tab.id
                ? tab.content
                : null}
            </div>
            <button
              className="Tabs__item--button"
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              TAB
            </button>
          </li>
        </>

      )) }
    </ul>
  );
};
