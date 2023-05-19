import { Tab } from '../../types/Tab';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab:Tab) => void;
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = currentTab.id === id ? 'is-active' : '';

            return (
              <li className={isSelected} data-cy="Tab" key={id}>
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => id !== currentTab.id && onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
