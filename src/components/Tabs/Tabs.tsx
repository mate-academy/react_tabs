import cn from 'classnames';
import { Tab } from '../../tab';

interface PropsTabs {
  tabs: Tab[];
  currentTab: Tab;
  selectedTab: (id: string) => void
}

export const Tabs = ({ tabs, selectedTab, currentTab }: PropsTabs) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': currentTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTab(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
