import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (selected: string) => void,
};

export const Tabs: React.FC<Props>
= ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && (
          selectedTab.content
        )}
      </div>
    </div>
  );
};
