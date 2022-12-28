interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={selectedTab.id === tab.id ? 'is-active' : ''}
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
  );
};
