import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  allTabs: Tab[],
  tabId: string,
  handleClick: (id: string) => void,
};

export const Tabs: React.FC<Props> = ({
  allTabs,
  tabId,
  handleClick,
}) => (
  <>
    <div className="tabs__button-container">
      {allTabs.map(tab => (
        <button
          className={classNames(
            'tabs__button',
            {
              'tabs__button-active': tab.id === tabId,
            },
          )}
          key={tab.id}
          type="button"
          onClick={() => handleClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}

    </div>
    <p className="tabs__content">
      {allTabs.find(tab => tab.id === tabId)?.content}
    </p>
  </>
);
