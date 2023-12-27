import cn from 'classnames';
import { TabsType } from '../../types/TabsType';

type Props = {
  tabs: TabsType[];
  selectedTabId: string;
  onTabSelected: (tab: TabsType) => void;
};

export const Tabs: React.FC<Props>
  = ({ tabs, selectedTabId, onTabSelected }) => {
    const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

    const handleTabClick = (tab: TabsType) => {
      if (selectedTabId !== tab.id) {
        onTabSelected(tab);
      }
    };

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;

              return (
                (
                  <li
                    data-cy="Tab"
                    className={cn(
                      { 'is-active': (tab === selectedTab) },
                    )}
                  >
                    <a
                      href={`#${id}`}
                      data-cy="TabLink"
                      onClick={(event) => {
                        event.preventDefault();
                        handleTabClick(tab);
                      }}
                    >
                      {title}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    );
  };
