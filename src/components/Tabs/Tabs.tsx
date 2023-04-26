import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[],
  onTabClick: (id: string) => void,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabClick,
  selectedTab,
}) => {
  const handleTabClick = (id: string) => {
    if (selectedTab.id !== id) {
      onTabClick(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  handleTabClick(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
