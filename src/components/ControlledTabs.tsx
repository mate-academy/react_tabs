import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

type Props = {
  tabs: Tab[],
  onSelectTab: (tab: Tab) => void,
};

export const ControlledTabs: React.FC<Props> = ({ tabs, onSelectTab }) => {
  return (
    <Tabs
      id="controlled-tab-example"
      className="mb-3"
      onSelect={(tabId) => {
        const selectedTab = tabs.find((tab) => (
          tabId === tab.id
        ));

        onSelectTab(selectedTab || tabs[0]);
      }}
    >
      {
        tabs.map((tab) => (
          <Tab
            title={tab.title}
            key={tab.id}
            eventKey={tab.id}
          />
        ))
      }
    </Tabs>
  );
};
