import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void
};

export const Tabs:React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  const tabInTabs = tabs.find(tab => tab.id === selectedTabId);

  const rigtTabId = tabInTabs ? tabInTabs.id : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={
                classNames({
                  'is-active': tab.id === rigtTabId,
                })
              }
              data-cy="Tab"
              key={tab.title}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id === selectedTabId) {
                    return;
                  }

                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab:Tab) => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
