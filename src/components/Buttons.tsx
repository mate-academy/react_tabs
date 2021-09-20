import React from 'react';

interface Props {
  tabButtons: Tab[];
  changeTab: (id: string) => void;
}

export const Buttons: React.FC<Props> = (props) => {
  const { tabButtons, changeTab } = props;

  return (
    <div>
      {tabButtons.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => changeTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
