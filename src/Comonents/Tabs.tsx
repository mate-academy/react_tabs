import React from 'react';
import './TabsStyle.scss';

type Props = {
  tabs: Tab[],
  selectedId: string,
  onSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedId,
  onSelectedTab,
}) => (
  <ul className="list">
    {tabs.map(tab => (
      <li
        key={tab.id}
      >
        <button
          className="ui grey button"
          value={selectedId}
          type="button"
          onClick={() => onSelectedTab(tab)}
        >
          <span
            className="list_content"
          >
            {tab.title}
          </span>
        </button>
      </li>
    ))}
  </ul>
);
