import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: any,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="Tabs__list">
        {tabs.map(tab => (
          <button
            className="Tabs__button"
            type="button"
            value={tab.id}
            onClick={(event) => {
              const element = event.currentTarget as HTMLInputElement;

              onTabSelected(element.value);
            }}
          >
            {tab.title}
          </button>
        ))}
      </ul>
      <div className="Tabs__content-field">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};
