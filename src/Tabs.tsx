import React, { useMemo } from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabClicked = useMemo(() => tabs.find(
    tab => selectedTabId === tab.id,
  ),

  []);

  return (
    <div className="Tabs">
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button type="button" onClick={() => onTabSelected(tab)}>
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
