import React from 'react';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  setSelectedTabId: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
}) => {
  const onTabSelected = () => (
    tabs.find(tab => tab.id === selectedTabId)
  );

  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          className="button"
          key={tab.id}
          onClick={() => (
            setSelectedTabId(tab)
          )}
        >
          {tab.title}
        </button>
      ))}
      <p
        data-cy="tab-content"
        className="message"
      >
        {onTabSelected()?.content}
      </p>
    </>
  );
};
