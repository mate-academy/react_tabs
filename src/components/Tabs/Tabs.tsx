import { Tab } from '../types/Tab';

export const Tabs: React.FunctionComponent<{
  tabs: Tab[], selectedTab: Tab, onClickTab: (tab : Tab) => void
}> = ({
  tabs,
  selectedTab,
  onClickTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"

            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={(e) => {
                  e.preventDefault();
                  onClickTab(tab);
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
