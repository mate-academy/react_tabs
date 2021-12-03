import React from 'react';

interface Props {
  tabButtons: Tab[];
  changeTab: (id: string) => void;
  selectedTabId: string;
}

export const Buttons: React.FC<Props> = (props) => {
  const { tabButtons, changeTab, selectedTabId } = props;

  return (
    <div>
      {tabButtons.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => changeTab(tab.id)}
          disabled={selectedTabId === tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
