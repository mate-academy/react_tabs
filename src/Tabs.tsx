import React from 'react';
import classNames from 'classnames';
import { Tab } from './react-app-env';

type Props = {
  allTabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props>
  = ({ allTabs, selectedTabId, onTabSelected }) => {
    const clickHandler = (tabId: string) => {
      if (tabId !== selectedTabId) {
        onTabSelected(tabId);
      }
    };

    return (
      <ul className="tabs">
        {allTabs.map(tab => (
          <React.Fragment key={tab.id}>
            <li className={classNames(
              'tabs__item',
              { 'tabs__item--selected': tab.id === selectedTabId },
            )}
            >
              <a
                href={`#${tab.title}`}
                onClick={() => clickHandler(tab.id)}
                className="tabs__link"
              >
                {tab.title}
              </a>
            </li>
          </React.Fragment>
        ))}
      </ul>
    );
  };
