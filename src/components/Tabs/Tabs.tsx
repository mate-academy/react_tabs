import { Tab } from '../../../types/Tab';

interface TabsProps {
  selectedTabId: string,
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = ({ selectedTabId, tabs, onTabSelected }: TabsProps) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={`${currentTab.id === id && 'is-active'}`}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    currentTab.id !== id && onTabSelected(tab))}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab && currentTab.content}
      </div>
    </div>
  );
};
