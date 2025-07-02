import React from 'react';

// Definicja typu, którą będzie współdzielić z App.tsx
export interface Tab {
  id: string;
  title: string;
  content: string;
}

// Definicja typów dla propsów, które ten komponent przyjmuje
interface TabsProps {
  items: Tab[]; // Zmieniono 'tabs' na 'items'
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

// Komponent `Tabs`
export const Tabs: React.FC<TabsProps> = ({
  items: componentTabs, // Zmieniono 'tabs' na 'items'
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab =
    componentTabs.find(tab => tab.id === selectedTabId) || componentTabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {componentTabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();
                  if (tab.id !== selectedTab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
