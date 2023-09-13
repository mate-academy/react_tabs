import cn from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | null,
  onTabSelected: (tabId: string) => void,
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
                      'is-active': tab.id === selectedTabId,
                    },
                  )
                }
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab.id)}
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
