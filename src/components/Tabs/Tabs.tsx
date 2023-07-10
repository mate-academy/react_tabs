import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelectTab: (id: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, onSelectTab, selectedTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onSelectTab(tab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={
                    classNames({
                      'is-active': selectedTab.id === tab.id,
                    })
                  }
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div
          className="block"
          data-cy="TabContent"
        >
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
