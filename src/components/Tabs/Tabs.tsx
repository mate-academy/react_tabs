import { Tab } from '../../types';

interface TabsProps {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string
}

/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-shadow */

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const getContentById = (id: string) => tabs.find(
    (tab: Tab) => tab.id === id,
  )?.content || tabs[0].content;

  const filteredTabs = tabs.map((tab: Tab, _index: number, arr) => {
    if (tab.id === selectedTabId) {
      return { ...tab, active: true };
    }

    if (!(tabs.map((tab: Tab) => tab.id).includes(selectedTabId))) {
      arr[0].active = true;
    }

    return tab;
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {filteredTabs.map((tab: Tab) => (
            <li
              className={tab.active ? 'is-active' : ''}
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
