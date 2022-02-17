import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  changeTabId: (value: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, changeTabId }) => {
  const filteredTabs = tabs.filter((tab: Tab) => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map((tab: Tab) => {
        const { id, title } = tab;

        return (
          <button key={id} type="button" onClick={() => changeTabId(id)}>
            {title}
          </button>
        );
      })}
      {filteredTabs.map((tab: Tab) => {
        const { id, content } = tab;

        return <div key={id}>{content}</div>;
      })}
    </div>
  );
};
