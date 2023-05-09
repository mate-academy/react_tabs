import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  selectedTabId: string,
  handleSelectedTab(tabId: string): void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  selectedTabId,
  handleSelectedTab,
}) => {
  const handleClick = (tabId: string) => {
    if (selectedTabId !== tabId) {
      handleSelectedTab(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }: Tab) => (
            <li
              key={id}
              className={selectedTabId === id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleClick(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
