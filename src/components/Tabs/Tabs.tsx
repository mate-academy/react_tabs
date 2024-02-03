import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: { id: string, title: string, content: string, }) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];
  const handleTabSelect = (id: string, title: string, content: string) => {
    if (selectedTabId !== id) {
      onTabSelected({ id, title, content });
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => {
            return (
              <li
                className={classNames(
                  { 'is-active': id === currTab.id },
                )}
                key={id}
                data-cy="Tab"
              >

                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(id, title, content)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {currTab.content}
      </div>
    </div>
  );
};
