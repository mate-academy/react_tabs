import Tab from '../../types/Tab';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const findSelectedTab = (id: string): Tab => (
    tabs.find(tab => tab.id === id) || tabs[0]
  );

  const selectedTab = findSelectedTab(selectedTabId);

  const hasClassName = (tab: Tab) => (
    selectedTab.id === tab.id ? 'is-active' : ''
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li className={hasClassName(tab)} data-cy="Tab" key={id}>
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    id !== selectedTabId && onTabSelected(tab)
                  )}
                >
                  {title}
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
