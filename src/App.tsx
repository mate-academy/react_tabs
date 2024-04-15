import React, { useState } from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { Tabs } from "./components/Tabs";
import { tabs } from "./components/tabsData"

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
          <ul>
            {tabs.map(tab => (
              <Tabs tab={tab} onChange={onTabSelected} activeTab={selectedTabId} />
          ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabs.find((tab) => tab.title === selectedTabId)?.content}
        </div>
      </div>
    </div>
  );
};
