import React from 'react';
import './TabsStyles.scss';
import classNames from 'classnames';

type Props = {
  allTabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({
  allTabs, selectedTabId, onTabSelected,
}) => {
  const clickHandler = (tabId: string) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <ul className="tabs-list">
      {allTabs.map(tab => (
        <React.Fragment key={tab.id}>
          <li className={classNames(
            'tabs-list__item',
            { 'tabs-list__item--selected': tab.id === selectedTabId },
          )}
          >
            <a
              href={`#${tab.title}`}
              onClick={() => clickHandler(tab.id)}
              className="tabs-list__link"
            >
              {tab.title}
            </a>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};
