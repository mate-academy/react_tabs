import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
  tabs: Tab[];
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTabId, onTabSelected, tabs } = props;

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <h1>{`Selected tab is ${selectedTabId}`}</h1>

      <div className="nav nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleClick(tab)}
            className={`nav-link ${tab.id === selectedTabId ? 'active' : ''}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p className="nav__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
