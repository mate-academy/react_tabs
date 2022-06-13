import React from 'react';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[];
  setTabs: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  setTabs,
  selectedTabId,
}) => {
  const chosenTab = tabs
    .find(tab => tab.id === selectedTabId);

  const getChosenTab = (tab: Tab) => (
    (tab.id !== selectedTabId) && setTabs(tab)
  );

  return (
    <div className="tab">
      <div className="buttonWrapper">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={() => getChosenTab(tab)}
          >
            {tab.title}
          </button>
        ))}

        <div className="textWrapper">
          <p data-cy="tab-content">
            {chosenTab?.content}
          </p>
        </div>
      </div>
    </div>
  );
};
