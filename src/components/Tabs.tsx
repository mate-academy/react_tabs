import React from 'react';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  callback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, callback }) => {
  return (
    <>
      <div className="App__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            value={tab.id}
            key={tab.id}
            onClick={(event) => callback(event)}
            className="App__button"
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p className="App__content">
        {tabs.map(tab => (
          tab.id === selectedTabId
            ? tab.content
            : null
        ))}
      </p>
    </>
  );
};
