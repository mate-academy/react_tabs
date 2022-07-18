import React from 'react';

interface Props {
  tabs: Tab[]
  onTabSelected: (tab:Tab) => void;
  selectedTab: Tab;
}
const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <>
      <div className="card">
        <footer className="card-header">
          {tabs.map(tab => (

            <button
              key={tab.id}
              type="button"
              className="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}

            </button>
          ))}
        </footer>

        <div className="card-footer">
          <div className="card-content">
            <div className="content">
              {selectedTab.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
