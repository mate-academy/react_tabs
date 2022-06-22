import React from 'react';
import { Tab } from './react-app-env';

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
  const tabClicked = tabs.find(
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
        {tabClicked}
      </p>
    </div>
  );
};
