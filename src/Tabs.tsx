import React from 'react';

interface Props {
  tabs: Tab[];
  selectedTabId: string | undefined;
  onTabSelected: (tab: Tab) => Tab | undefined | string;
}

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const content = tabs.find(t => selectedTabId === t.id)?.content;

  return (
    <div>
      {tabs.map(tab => {
        return (
          <div
            role="button"
            onClick={() => onTabSelected(tab)}
            tabIndex={0}
            onKeyDown={() => onTabSelected}
            className="tabs"
            key={tab.id}
          >
            <h3 className={tab.id === selectedTabId
              ? 'tabs-title active'
              : 'tabs-title'}
            >
              {tab.title}
            </h3>
          </div>
        );
      })}
      <hr />
      <p className="content">
        {content}
      </p>
    </div>
  );
};

export default Tabs;
