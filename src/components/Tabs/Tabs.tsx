import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tabId: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab: Tab) => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab === selectedTab ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
              onKeyDown={() => onTabSelected(tab.id)}
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
