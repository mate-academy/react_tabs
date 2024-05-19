import { Tab } from '../../type/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  if (!selectedTab) {
    selectedTab = tabs[0];
  }

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {selectedTab ? selectedTab.title : tabs[0].title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                className={id === selectedTabId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  onClick={() => {
                    if (id !== selectedTabId) {
                      onTabSelected(tabs.find(tab => tab.id === id) || tabs[0]);
                    }
                  }}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab ? selectedTab.content : tabs[0].content}
        </div>
      </div>
    </div>
  );
};
