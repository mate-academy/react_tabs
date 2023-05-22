import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  if (!tabs) {
    return null;
  }

  const currentTab = tabs?.find(tab => tab.id === selectedTabId) || tabs[0];

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
              className={currentTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
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
