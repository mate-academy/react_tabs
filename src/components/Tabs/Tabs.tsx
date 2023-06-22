export interface TabType {
  id: string;
  title: string;
  content: string;
}

type TabListProps = {
  tabs: TabType[];
  handleTabClick: (tabItem: TabType) => void;
  activeTab: TabType;
};

export const Tabs: React.FC<TabListProps> = ({
  tabs,
  handleTabClick,
  activeTab,
}) => {
  return (
    <>
      <ul>
        {tabs.map((tabItem) => (
          <li
            key={tabItem.id}
            className={tabItem === activeTab ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tabItem.id}`}
              data-cy="TabLink"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(tabItem);
              }}
            >
              {tabItem.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
