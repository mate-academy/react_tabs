import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  selectedTabId,
  onTabSelected,
}) => {
  let tabId = selectedTabId;

  if (!tabs.find((tab) => tab.id === selectedTabId)) {
    tabId = 'tab-1';
  }

  const handleTabSelecting = (tab: Tab) => {
    if (tab.id !== tabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === tabId })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  handleTabSelecting(tab);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
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
