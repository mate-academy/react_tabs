import { FC } from 'react';

export type TabType = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: TabType[];
  selectedTabId: string;
  onTabSelected: (tab: TabType) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const sel = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const onHandleClick = (tab: TabType) => {
    if (sel.id !== tab.id) {
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
                className={tab.id === sel.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onHandleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {sel.content}
      </div>
    </div>
  );
};
