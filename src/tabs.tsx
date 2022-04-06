import React from 'react';

type Props = {
  tabs:Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;

};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  return (
    <div className="tab">
      <ul className="tab_list">
        {tabs.map(tab => (
          <li className="tab_item" key={tab.id}>
            <button
              type="button"
              className={selectedTabId === tab.id ? 'button_active' : ''}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab_content">
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>

  );
};
