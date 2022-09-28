import classNames from 'classnames';

interface Props {
  id: string;
  title: string;
  content: string;
}

interface TabType {
  tabs: Props[];
  selectedTabId: string;
  tabSelected: (value: Props) => void;
}

export const Tabs: React.FC<TabType> = ({
  tabs,
  selectedTabId,
  tabSelected,
}) => {
  const isSelectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  const handleClick = (tab: Props) => {
    if (selectedTabId !== tab.id) {
      tabSelected(tab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Props) => (
              <li
                className={classNames(
                  { 'is-active': isSelectedTab.id === tab.id },
                )}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {isSelectedTab.content}
        </div>
      </div>
    </>
  );
};
