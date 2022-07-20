import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  changeId: (tab: string) => void
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, changeId }) => {
  return (
    <div>
      <ul className="list">
        {tabs.map((tab) => (
          <li
            className="list__item"
            key={tab.id}
          >
            <button
              className={selectedTabId === tab.id
                ? ('list__button')
                : ('list__button list__button--active')}
              type="button"
              onClick={() => changeId(tab.id)}
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
        {tabs.find(tab => tab.id === selectedTabId)?.content || ''}
      </p>
    </div>
  );
};
