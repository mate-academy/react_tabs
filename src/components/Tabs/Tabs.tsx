import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelect(tabId: string): void,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelect,
  selectedTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': selectedTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onSelect(tab.id);
                  }
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
