import { TabsType } from '../../types/Tabs';

type Props = {
  tabs: TabsType[],
  selectedTabId: string,
  onTabSelected: React.Dispatch<React.SetStateAction<TabsType>>
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: TabsType) => (
            <li
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content}
      </div>
    </div>
  );
};
