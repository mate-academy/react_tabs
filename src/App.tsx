import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.scss";
import { ITabDefinition, Tabs } from "./components/Tabs";

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = React.useState("tab-1");

  const tabDefinitions = React.useMemo<ITabDefinition[]>(
    () => [
      { id: "tab-1", title: "Tab 1", content: "Some text 1" },
      { id: "tab-2", title: "Tab 2", content: "Some text 2" },
      { id: "tab-3", title: "Tab 3", content: "Some text 3" },
    ],
    []
  );

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is{" "}
        {tabDefinitions.find((tab) => tab.id === selectedTabId)?.title}
      </h1>

      <Tabs
        tabs={tabDefinitions}
        selectedTabId={selectedTabId}
        onTabSelected={(tab) => setSelectedTabId(tab.id)}
      />
    </div>
  );
};
