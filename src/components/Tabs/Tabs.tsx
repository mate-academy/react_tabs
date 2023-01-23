/* eslint-disable @typescript-eslint/ban-types */
// import { Tab } from '../../App';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabContent: string,
  selectedTabId: string,
  changeTab: (tab: Tab) => void,
};

export const Tabs = (props: Props) => {
  const {
    tabs,
    selectedTabId,
    changeTab,
    selectedTabContent,
  } = props;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            return (
              <li
                className={selectedTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    changeTab(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
