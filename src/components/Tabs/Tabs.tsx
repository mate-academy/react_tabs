import classNames from 'classnames';

type TabProp = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: TabProp[],
  setSelectedTabId: (id: string) => void,
  selectedTabId: string,
  selectedTab: TabProp,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  setSelectedTabId,
  selectedTabId,
  selectedTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: TabProp) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setSelectedTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
