import cn from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | null,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const selectedTab: Tab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  return (

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={
                  cn(
                    {
                      'is-active': tab.id === selectedTab.id,
                    },
                  )
                }
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => tab.id === selectedTabId || onTabSelected(tab)}
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
  );
};
