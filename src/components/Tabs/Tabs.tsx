import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];

  activeTab: number;
  selectedTabId: (id: string) => number;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  selectedTabId,
  onTabSelected,
}) => {
  const checkSelected = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (selectedTabId(e.currentTarget.id) !== activeTab) {
      onTabSelected(e.currentTarget.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({
                'is-active': activeTab === selectedTabId(tab.id),
              })}
              data-cy="Tab"
              key={tab.title}
            >
              <a
                href={`#${tab.id}`}
                onClick={checkSelected}
                data-cy="TabLink"
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`Some text ${activeTab}`}
      </div>
    </div>
  );
};
