import React from 'react';
import PropTypes from 'prop-types';
import { TabsTitles } from '../TabsTitles/TabsTitles';
import { TabsContent } from '../TabsContent/TabsContent';
import { TabType, SelectedTabIdType, OnTabSelectedType } from '../../types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  let selectedTabIndex = tabs.findIndex(tab => tab.id === selectedTabId);

  if (selectedTabIndex === -1) {
    selectedTabIndex = 0;
  }

  const tabId = tabs[selectedTabIndex].id;

  return (
    <>
      <TabsTitles
        tabs={tabs}
        tabId={tabId}
        onTabSelected={onTabSelected}
      />
      <TabsContent content={tabs[selectedTabIndex].content} />
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType.isRequired).isRequired,
  selectedTabId: SelectedTabIdType.isRequired,
  onTabSelected: OnTabSelectedType.isRequired,
};
