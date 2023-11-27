import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const {
    id: activeId,
    content: activeContent,
  } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                className={tab.id === activeId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => (tab.id !== activeId) && onTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeContent}
      </div>
    </div>

  );
};
