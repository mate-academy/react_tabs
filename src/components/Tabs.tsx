import React from 'react';

type Props = {
  tabs: Tab[],
  selected: Tab,
  onSelect: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onSelect,
  selected,
}) => {
  return (
    <div className="tabs">
      <div className="buttons">
        {tabs.map(tab => (
          <button
            type="button"
            className={selected.id === tab.id ? 'active' : ''}
            onClick={() => onSelect(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.find(tab => selected.id === tab.id)?.content}
      </div>
    </div>
  );
};
