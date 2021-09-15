import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (index: string) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="container">
    {tabs.map(({ title, id }) => (
      <button
        key={id}
        type="button"
        className={classNames({
          active: id === selectedTab.id,
        })}
        onClick={() => onTabSelected(id)}
      >
        {title}
      </button>
    ))}
    <h1 className="content">
      {selectedTab.content}
    </h1>
  </div>
);
