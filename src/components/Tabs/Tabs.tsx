/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Tabs.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Selection = (params: Tab) => void;

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Selection,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <div
        className="ButtonsContainer"
      >
        {
          tabs.map(tab => (
            <>
              <button
                type="button"
                key={tab.id}
                className={
                  selectedTabId === tab.id ? 'TabButton Clicked' : 'TabButton'
                }
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </button>
            </>
          ))
        }
        <div className="FreeSpace">
        </div>
      </div>

      <div>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};

export default Tabs;
