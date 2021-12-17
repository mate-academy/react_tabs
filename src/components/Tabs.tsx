import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  onSelect(ards: string): void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onSelect,
}) => {
  return (
    <div className="Tabs">
      <div className="Tabs__button-list">
        {tabs && tabs.map(tab => (
          <button
            className="Tabs__button-item"
            key={tab.id}
            type="button"
            onClick={() => {
              onSelect(tab.id);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};
