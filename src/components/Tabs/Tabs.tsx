import React from 'react';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];

  activeTab: string;
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={activeTab === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.title}
            >
              <a
                href={`#${tab.id}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (e.currentTarget.id !== activeTab) {
                    onTabSelected(e.currentTarget.id);
                  }
                }}
                data-cy="TabLink"
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`Some text ${selectedTabId}`}
      </div>
    </div>
  );
};
