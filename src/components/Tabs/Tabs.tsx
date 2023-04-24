import { Tab } from '../../types';

interface TabsProps {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string
}

export const Tabs: React.FC<TabsProps>= ({ 
  tabs, 
  onTabSelected, 
  selectedTabId,
}) => {
    const getContentById = (id: string) => tabs.find(
      (tab: Tab) => tab.id === id,
    )?.content;

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => (
              <li
                className={selectedTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (selectedTabId !== tab.id) {
                      onTabSelected(tab);
                    }
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
          {getContentById(selectedTabId)}
        </div>
      </div>
    );
  };
