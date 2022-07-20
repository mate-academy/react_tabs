import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => Tab | undefined | string;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const content = tabs.find(t => selectedTabId === t.id)?.content;

  return (
    <div>
      {tabs.map(tab => {
        return (
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
            className={classNames(
              'button-9',
              { active: tab.id === selectedTabId },
            )}
            key={tab.id}
          >
            {tab.title}
          </button>
        );
      })}
      <hr />
      <p className="content">
        {content}
      </p>
    </div>
  );
};
