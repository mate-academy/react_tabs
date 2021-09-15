import React from 'react';
import './TabsList.scss';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onChange: (tabId: string) => void;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedTab, onChange }) => {
  return (
    <>
      <div className="buttons">
        {tabs.map(tab => (
          <button
            className={classNames('button', selectedTab === tab && 'selected')}
            type="button"
            name={tab.id}
            onClick={() => onChange(tab.id)}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {selectedTab.content}
      </div>
    </>
  );
};
