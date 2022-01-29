import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {
      tabs.map(tab => (
        <li key={tab.id} className="tab">
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
          {selectedTabId === tab.id
            && (
              <p className="tab__content">
                {tab.content}
              </p>
            )}
        </li>
      ))
    }
  </ul>
);

export default Tabs;
