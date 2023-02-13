import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab:Tab) => void,
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const handleClick = (selectedTabOnClick: Tab) => {
    if (!tabs.some(tab => tab.id === selectedTabId)) {
      onTabSelected(tabs[0]);
    }

    if (selectedTabOnClick.id !== selectedTabId) {
      onTabSelected(selectedTabOnClick);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const {
              id,
              title,
            } = tab;

            return (
              <li
                className={cn({ 'is-active': selectedTabId === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`${tabs.find(tab => tab.id === selectedTabId)?.content}`}
      </div>
    </div>
  );
};
