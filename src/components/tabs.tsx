import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          className="tab__button"
          key={tab.id}
          onClick={() => {
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <div className="tab__content">
        Content:
        {' '}
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
