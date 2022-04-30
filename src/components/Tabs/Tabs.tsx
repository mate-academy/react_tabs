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
            <React.Fragment key={tab.id}>
              <button
                type="button"
                className={
                  selectedTabId === tab.id ? 'TabButton Clicked' : 'TabButton'
                }
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </button>
            </React.Fragment>
          ))
        }
        <div className="FreeSpace">
          Some text
        </div>
      </div>

      <div>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </>
  );
};

export default Tabs;
