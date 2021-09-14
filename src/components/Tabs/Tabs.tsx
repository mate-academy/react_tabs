import React from 'react';
import './Tabs.scss';

interface Props {
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTabId, onTabSelected, tabs } = props;

  return (
    <>
      <h1>{`Selected tab is ${selectedTabId}`}</h1>

      <div className="nav">
        {tabs.map(tab => (
          <div key={tab.id} className="nav__tab">
            <button
              type="button"
              onClick={() => onTabSelected(tab.id)}
              className={`nav__button ${tab.id === selectedTabId ? 'nav__button--active' : ''}`}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div>
        {tabs.map(tab => (
          <div key={tab.id} className="nav__content">
            {selectedTabId === tab.id && (
              tab.content
            )}
          </div>
        ))}
      </div>
    </>
  );
};
