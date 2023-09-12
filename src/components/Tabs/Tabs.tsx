import { Tab } from '../../Types';

type TabsProps = {
  tabs: Tab[],
  handleTabSelect: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs = ({ tabs, handleTabSelect, selectedTabId }:
TabsProps) => {
  const {
    id: activeId,
    content: activeContent,
  } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={tab.id === activeId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="tabLink"
                  onClick={() => tab.id !== activeId && handleTabSelect(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {activeContent}
        </div>
      </div>
    </>
  );
};
