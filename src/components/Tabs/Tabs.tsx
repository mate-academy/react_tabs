import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<TabsProps> = ({
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
              const isSelectedTab = selectedTab === tab;

              return (
                <li
                  className={classNames({
                    'is-active': isSelectedTab,
                  })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (!isSelectedTab) {
                        onTabSelected(tab);
                      }
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
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
