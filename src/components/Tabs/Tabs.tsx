import classNames from 'classnames';
import { TabType } from '../../types/TabType';

interface Props {
  tabs: TabType[],
  onTabSelected: (tab: TabType) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const switchTabs = (tab: TabType) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => {
              return (
                <li
                  className={classNames(
                    { 'is-active': selectedTab.id === tab.id },
                  )}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => switchTabs(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
