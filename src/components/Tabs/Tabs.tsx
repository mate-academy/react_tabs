import classNames from 'classnames';
import React from 'react';

interface Props {
  id: string,
  title: string,
  content: string,
}

interface TabsType {
  tabs: Props[],
  selectedTabId: Props,
  handelClick: (value: Props) => void,
}

export const Tabs: React.FC<TabsType> = React.memo(
  ({
    tabs,
    selectedTabId,
    handelClick,
  }) => {
    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map((tab) => {
                return (
                  <li
                    key={tab.id}
                    className={classNames(
                      { 'is-active': tab.id === selectedTabId.id },
                    )}
                    data-cy="Tab"
                  >
                    <a
                      href={`#${tab.id}`}
                      data-cy="TabLink"
                      onClick={() => handelClick(tab)}
                    >
                      {tab.title}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabId.content}
        </div>
      </div>

    );
  },
);
