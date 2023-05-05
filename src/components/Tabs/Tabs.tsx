import { useEffect } from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
  selectedTab: Tab

};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
  selectedTab,
}) => {
  useEffect(() => {
    const selected = tabs.find(tab => tab.id === selectedTabId);

    onTabSelected(selected || tabs[0]);
  }, []);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              id={tab.id}
              key={tab.id}
              className={`${tab === selectedTab ? 'is-active' : ''}`}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(tab)}
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
