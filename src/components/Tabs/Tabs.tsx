import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={selectedTabId === tab.id ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => (
                tab.id === selectedTabId || onTabSelected(tab.id)
              )}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div
        className="block"
        data-cy="tab-content"
      >
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  </div>
);
