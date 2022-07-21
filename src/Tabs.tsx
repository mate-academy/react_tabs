import classNames from 'classnames';
import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  changeTab: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, changeTab }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="list">
        {tabs.map((tab) => (
          <li
            className="list__item"
            key={tab.id}
          >
            <button
              className={classNames('list__button', {
                'list__button--active': tab.id === selectedTabId,
              })}
              type="button"
              onClick={() => changeTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p
        className="content"
        data-cy="tab-content"
      >
        {currentTab?.content || ''}
      </p>
    </div>
  );
};
