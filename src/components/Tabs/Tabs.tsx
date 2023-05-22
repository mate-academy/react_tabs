import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  selectedTabId: string;
  tabs: Tab[];
  onTabSelected: (selectedTabId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  const handleTabSelect = (tab: Tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab.id);
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  className={classNames({
                    'is-active': tab.id === selectedTabId,
                  })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => handleTabSelect(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
