import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  tab: string;
  onTabSelected: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, tab, onTabSelected }) => {
  const selectedTabData = tabs.find((t) => t.id === tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((t) => (
            <li
              key={t.id}
              className={t.id === tab ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${t.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(t.id)}
              >
                {t.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabData?.content}
      </div>
    </div>
  );
};
