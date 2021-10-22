import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onSaveId: (id: string) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSaveId }) => (
  <div>
    {tabs.map((tab) => {
      return (
        <input
          className="btn"
          key={tab.id}
          type="button"
          value={tab.title}
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onSaveId(tab.id);
            }
          }}
        />
      );
    })}
    <div>{tabs.find((tab) => tab.id === selectedTabId)?.content}</div>
  </div>
);

export default Tabs;
