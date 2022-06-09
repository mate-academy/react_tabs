import React from 'react';
import './Tabs.scss';
import classname from 'classnames';

interface Prop {
  tabs:Tab[],
  selectedTabId: Tab | undefined,
  onTabSelected: (content:string) => void;
}

export const Tabs:React.FC<Prop> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            className={classname('button',
              { 'button chose': selectedTabId?.id === tab.id })}
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p
        data-cy="tab-content"
        className="title"
      >
        {selectedTabId?.content}
      </p>
    </>
  );
};
