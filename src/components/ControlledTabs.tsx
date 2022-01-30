import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

type Props = {
  tabs: Tab[],
  onSelectTab: (tabId: string) => void,
};

export const ControlledTabs: React.FC<Props> = ({ tabs, onSelectTab }) => {
  return (
    <Tabs
      id="controlled-tab-example"
      onSelect={(tabId) => {
        if (tabId !== null) {
          onSelectTab(tabId);
        }
      }}
      className="mb-3"
    >
      {
        tabs.map((tab) => (
          <Tab
            title={tab.title}
            key={tab.id}
            eventKey={tab.id}
          >
            {tab.content}
          </Tab>
        ))
      }
    </Tabs>
  );
};
