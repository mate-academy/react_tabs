import cn from 'classnames';
import { Tab } from '../../types/Tab';

type TabProps = {
  tabs: Tab[],
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabProps) => {
  const selectedTab = tabs.find(v => v.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
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
