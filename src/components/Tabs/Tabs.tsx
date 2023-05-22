import { Tab } from '../../../types/Tab';

interface TabsProps {
  selectedTabId: string,
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = ({ selectedTabId, tabs, onTabSelected }: TabsProps) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const { title, id, content } = currentTab;

  return (
    <>
      <h1 className="title">
        {`Selected tab is ${currentTab && title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={`${id === tab.id && 'is-active'}`}
                data-cy="Tab"

              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    id !== tab.id && onTabSelected(tab))}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {currentTab && content}
        </div>
      </div>
    </>
  );
};
