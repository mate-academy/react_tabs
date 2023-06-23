export interface TabType {
  id: string;
  title: string;
  content: string;
}

type TabListProps = {
  tabs: TabType[];
  handleTabClick: (id: string) => void;
  activeTab: TabType;
};

export const Tabs: React.FC<TabListProps> = ({
  tabs,
  handleTabClick,
  activeTab,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>,
    id: string) => {
    e.preventDefault();
    handleTabClick(id);
  };

  return (
    <ul>
      {tabs.map(({ id, title }) => (
        <li
          key={id}
          className={id === activeTab.id ? 'is-active' : ''}
          data-cy="Tab"
        >
          <a
            href={`#${id}`}
            data-cy="TabLink"
            onClick={(e) => handleClick(e, id)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};
