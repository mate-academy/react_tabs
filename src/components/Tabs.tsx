import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelect,
}) => {
  return (
    <>
      <ul className="tab__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames(
                'tab__item',
                { 'tab__item--active': tab.id === selectedTabId },
              )}
              onClick={() => onTabSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
