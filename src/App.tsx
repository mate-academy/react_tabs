import React, { useState } from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Tabs } from "./components/Tabs";

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].title);

  const onTabSelected = (title: string) => {
    if (title !== selectedTabId) {
      setSelectedTabId(title);
    }

    if (!title) {
      setSelectedTabId(tabs[0].title);
    }
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectedTabId}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            onChange={onTabSelected}
            activeTab={selectedTabId}
          />
        </div>
        <div className="block" data-cy="TabContent">
          {tabs.find((tab) => tab.title === selectedTabId)?.content}
        </div>
      </div>
    </div>
  );
};
