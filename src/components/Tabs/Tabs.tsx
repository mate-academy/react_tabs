import classNames from 'classnames';
import { Tab } from '../../Tab';

type TabsType = {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<TabsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={classNames({
                    'is-active': tab.id === selectedTab.id,
                  })}
                  key={tab.id}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (selectedTab.id === tab.id) {
                        return;
                      }

                      onTabSelected(tab);
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      </div>
    </>
  );
};
