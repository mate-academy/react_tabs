// import { RefCallback } from "react";

// export const Tabs = () => {};
type Tab = {
  id:string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  activeTabId: string,
  onTabSelected: (selectedId: string) => void,
};

export const Tabs:React.FC<Props> = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId)
      || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              className={
                tab.id === activeTabId
                  ? 'is-active'
                  : ''
              }
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onTabSelected(tab.id);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
