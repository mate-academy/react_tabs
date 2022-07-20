import classNames from 'classnames';
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
        <header className="card-header">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={classNames(
                'button',
                { 'is-link': selectedTab.id === tab.id },
              )}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          ))}
        </header>

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
