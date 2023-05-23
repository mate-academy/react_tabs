interface Tab {
  id: string,
  title: string,
  content: string,
}

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void,
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                {...selectedTabId === tab.id
                  ? { className: 'is-active' }
                  : undefined}
              >
                <a
                  href={`"#${tab.id}"`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === selectedTabId)?.content)}
      </div>
    </div>
  );
};
