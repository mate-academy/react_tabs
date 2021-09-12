import React from 'react';
import './TabsList.scss';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTab: string;
  onChange: (event: any) => void;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedTab, onChange }) => {
  return (
    <>
      <div className="buttons">
        {tabs.map(tab => (
          <button
            className={classNames('button', tab.id === selectedTab && 'selected')}
            type="button"
            name={tab.id}
            onClick={onChange}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === selectedTab)?.content}
      </div>
    </>
  );
};
