import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: number,
  onTabSelected: (ind: number) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectTab = (event: React.SyntheticEvent, ind: number) => {
    event.preventDefault();
    onTabSelected(ind);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, ind) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': ind === selectedTabId,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => {
                  selectTab(e, ind);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs[selectedTabId].content}
      </div>
    </div>
  );
};
