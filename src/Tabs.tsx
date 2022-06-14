import React from 'react';
import './App.scss';

type Props = {
  tabs: Tab[];
  selectedId: string;
  selectedTab: Tab;
  setSelectedTab: (selectedTab: Tab) => void;
  setSelectedId: (selectedId: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedId,
  selectedTab,
  setSelectedTab,
  setSelectedId,
}) => (
  <>
    <div className="App__tabsTitles">
      <ul className="tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className={
                selectedId === tab.id
                  ? 'button button-active'
                  : 'button'
              }
              type="button"
              onClick={() => {
                setSelectedTab(tab);
                setSelectedId(tab.id);
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
