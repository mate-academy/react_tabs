import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const isSelectedTab = tabs.find((tab) => (
    tab.id === selectedTabId)) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const selectedTab = id === isSelectedTab.id;

            return (
              <li
                className={classNames({ 'is-active': selectedTab })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!selectedTab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <article className="block" data-cy="TabContent">
        {tabs.find(tab => (
          selectedTabId === tab.id))?.content}
      </article>
    </div>
  );
};
