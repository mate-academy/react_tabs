import React from 'react';
import { Tab } from '../../types';
import { TabsControl } from '../TabsControl/TabsControl';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectTab: (tab: string) => void;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, selectTab, selectedTabId }) => {
  const selectedTab = (id: string) => (
    tabs.find(tab => tab.id === id)
  );

  return (
    <div className="tabs">
      <h1>{`Selected tab is ${selectedTab(selectedTabId)?.title || ''}`}</h1>
      <TabsControl
        tabs={tabs}
        selectTab={selectTab}
      />
      <p>
        {selectedTab(selectedTabId)?.content}
      </p>
    </div>
  );
};
