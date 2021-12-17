import React from 'react';
import './Tabs.scss';
import { Content } from './Content';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[],
  selectedId: string,
  onTabSelected: any,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedId, onTabSelected }) => {
  return (
    <>
      <div
        className="tabs"
        onClick={onTabSelected}
        onKeyDown={onTabSelected}
        role="button"
        tabIndex={0}
      >
        {tabs.map(tab => (
          <span
            id={tab.id}
            key={tab.id}
            className={tab.id === selectedId ? 'isActive tab' : 'tab'}
          >
            {tab.title}
          </span>
        ))}
      </div>
      <Content content={tabs.find(tab => tab.id === selectedId)!.content} />
    </>
  );
};
