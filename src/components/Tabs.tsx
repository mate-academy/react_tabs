import React from 'react';

interface Props {
  tabs: Tab[];
  tablId: Tab;
  onSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  tablId,
  onSelect,
}) => {
  return (
    <>
      <ul className="Tabs">
        {tabs.map(tab => {
          return (
            <li key={tab.id}>
              <button
                type="button"
                className={tab.id === tablId.id
                  ? 'button active'
                  : 'button'}
                onClick={() => {
                  if (tablId.id !== tab.id) {
                    onSelect(tab);
                  }
                }}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
