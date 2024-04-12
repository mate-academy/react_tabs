import { FC } from 'react';

export type TabType = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: TabType[];
  selectedTab: string;
  onTabSelected: (tab: TabType) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  const specifiedTab = tabs.find(tab => tab.id === selectedTab) || tabs[0];

  const handleClick = (tab: TabType) => {
    if (specifiedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={tab.id === specifiedTab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {specifiedTab.content}
      </div>
    </div>
  );
};
