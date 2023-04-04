interface TabsProps {
  onTabSelected: (idTab: string) => void;
  selectedTabId: {
    title: string;
    content: string;
  };
  tabs: {
    id: string;
    title: string;
    content: string;
  }[]
}

export const Tabs: React.FC<TabsProps> = ({
  onTabSelected, selectedTabId, tabs,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              role="tab"
              onClick={() => onTabSelected(tab.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onTabSelected(tab.id);
                }
              }}
              className={selectedTabId.title === tab.title
                ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
