import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const handleTabSelect = (tabId: string) => {
    if (!tabs.find(tab => tab.id === tabId)) {
      onTabSelected(tabs[0].id);
    }

    if (tabId === selectedTabId) {
      return;
    }

    onTabSelected(tabId);
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li className={classNames({
              'is-active': selectedTab.id === tab.id,
            })}
            >
              <a href={`#${tab.id}`} onClick={() => handleTabSelect(tab.id)}>{tab.title}</a>
            </li>
          );
        })}
        {/* <li className={classNames({
          'is-active': selectedTab === 'tab-1',
        })}
        >
          <a href="#tab-1" onClick={() => onTabSelected}>Tab 1</a>
        </li>

        <li className="">
          <a href="#tab-2">Tab 2</a>
        </li>

        <li className="">
          <a href="#tab-3">Tab 3</a>
        </li> */}
      </ul>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
