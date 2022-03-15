import classNames from 'classnames';
import React from 'react';

import './Tabs.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabsId: string,
  selectedTabsContent: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabsId,
  selectedTabsContent,
  onTabSelected,
}) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="submit"
              className={classNames({
                button: true,
                'tabs__item-button': selectedTabsId !== tab.id,
                'tabs__item-button--active': selectedTabsId === tab.id,
              })}
              onClick={() => {
                if (selectedTabsId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{selectedTabsContent}</p>
    </div>
  );
};
