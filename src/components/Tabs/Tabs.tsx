import { Tab, TabsProps } from '../../types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id === selectedTab.id) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab ? selectedTab.title : ''}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(tab => (
                <li
                  key={tab.id}
                  className={tab.id === selectedTab?.id ? 'is-active' : ''}
                  data-cy="Tab"
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
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
