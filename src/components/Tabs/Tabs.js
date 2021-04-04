import React from 'react';
import { TabsType } from '../../types';

export const Tabs = ({
  tabs,
  selectedTab,
  selectedTabId,
  onTabSelected,
}) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        className={tab.id === selectedTabId
          ? ' App__button--selected'
          : 'App__button'}
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))}
    <p>{selectedTab.content}</p>
  </>
);

Tabs.propTypes = TabsType;
