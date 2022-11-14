import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string
};

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (a: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const selectHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    isSelected: Tab,
    tab: Tab,
  ): void => {
    event.preventDefault();
    if (isSelected !== tab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => selectHandler(event, selectedTab, tab)}
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
