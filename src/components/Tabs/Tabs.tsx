import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  selectedTab: Tab,
  setSelectedTabId: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    selectedTab,
    setSelectedTabId,
  },
) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === selectedTabId;

            return (
              <li
                className={isActive ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => setSelectedTabId(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
