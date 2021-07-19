import React from 'react';
import { TabType, OnTabSelectedType, SelectedTabIdType } from '../../types';
import './TabsTitle.css';

export const TabsTitle = ({ tab, onTabSelected, tabId }) => (
  <button
    type="button"
    className={`tabs__link ${
      tabId === tab.id ? ' tabs__link--active' : ''}`}
    onClick={() => {
      if (tab.id !== tabId) {
        onTabSelected(tab);
      }
    }}
  >
    {tab.title}
  </button>
);

TabsTitle.propTypes = {
  tab: TabType.isRequired,
  tabId: SelectedTabIdType.isRequired,
  onTabSelected: OnTabSelectedType.isRequired,
};
