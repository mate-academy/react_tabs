import React, { useState } from 'react';

// Importy stylów
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// Poprawiony import z komponentu Tabs
import { Tabs, Tab } from './components/Tabs/Tabs'; // Zmieniona ścieżka importu

// Dane używane tylko w tym komponencie
const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// Główny komponent aplikacji
export const App: React.FC = () => {
  // Stan przechowujący ID aktywnej zakładki
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabSelect = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>

      <Tabs
        items={tabs} // Zmieniono 'tabs' na 'items'
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelect}
      />
    </div>
  );
};
