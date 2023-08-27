export type Tab = {
  id: string
  title: string
  content: string
};

type TabsProps = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  let selectedTabIdCopy = selectedTabId;

  if (tabs.length > 0 && !tabs.map(tab => tab.id).includes(selectedTabId)) {
    selectedTabIdCopy = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = tab.id === selectedTabIdCopy;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={isTabSelected ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={
                    () => (isTabSelected ? {} : onTabSelected(tab))
                  }
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabIdCopy)?.content}
      </div>
    </div>
  );
};
