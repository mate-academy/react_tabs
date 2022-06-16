import React from 'react';
import './App.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTab: (selectedTab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => (
  <>
    <div className="App__tabsTitles">
      <ul className="tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className={
                selectedTab.id === tab.id
                  ? 'button button-active'
                  : 'button'
              }
              type="button"
              onClick={() => {
                setSelectedTab(tab);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="App__line" />
    <div className="App__tabContent">
      {selectedTab.content}
    </div>
  </>
);
