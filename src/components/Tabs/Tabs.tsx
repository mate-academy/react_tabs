import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  selectedTab: Tab,
  selectedTabId: string,
  tabs: Tab[]
  onTabSelected: (tab: Tab) => void
};

export const Tabs:React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected, selectedTab,
}) => {
  const isSelectedIdWrong = tabs.find(tab1 => selectedTabId === tab1.id);

  const correctSelectedTabId = isSelectedIdWrong ? selectedTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={correctSelectedTabId === tab.id ? 'is-active' : ''}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();

                  if (correctSelectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          )) }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : tabs[1].content}
      </div>
    </div>
  );
};
