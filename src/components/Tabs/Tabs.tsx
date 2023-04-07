import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const currentTab = tabs.filter(({ id }) => id === selectedTabId)[0];
  const { content } = currentTab;

  const onSelect = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                id={tab.id}
                title={tab.title}
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
