import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tabs[]
  selectedTabId: string,
  onTabSelected: (tab: Tabs) => void
};
export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="list block">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="list__item"
          >
            <button
              className={classNames('button is-secondary', {
                'is-primary is-danger': tab.id === selectedTabId,
              })}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
