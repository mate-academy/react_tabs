import classNames from 'classnames';
import React from 'react';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  allTabs: Tab[],
  selectedTabId: string | undefined,
  onChange: any,
};

export const Tabs: React.FC<Props> = ({ allTabs, selectedTabId, onChange }) => {
  return (
    <>
      <div
        className="tabs-titles"
      >
        {allTabs.map((item: Tab) => (
          <button
            type="button"
            className={classNames(
              'tab-title',
              { 'tab-title__active': selectedTabId === item.id },
            )}
            key={item.title}
            onClick={() => {
              onChange(item.title);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        className="tabs-components"
      >
        {allTabs.map((item: Tab) => (
          <p
            key={item.id}
            className={classNames(
              'tabs-components__content',
              { active: selectedTabId === item.id },
            )}
          >
            {item.content}
          </p>
        ))}
      </div>
    </>
  );
};
