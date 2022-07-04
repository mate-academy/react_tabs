import React from 'react';

interface Props {
  tabs: Tab[];
  selectTab: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectTab,
  selectedTabId,
}) => {
  const tabContent = tabs.find(
    tab => selectedTabId === tab.id,
  )?.content;

  return (
    <div className="Tabs">
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button type="button" onClick={() => selectTab(tab)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p data-cy="tab-content">
        {tabContent}
      </p>
    </div>
  );
};
