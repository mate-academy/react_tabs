import React, { useState, MouseEvent } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectTab: (event: MouseEvent, callback: () => {}, tabsArr: Tab[]) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectTab,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
                onClick={(event) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  return selectTab(event, setSelectedTab, tabs);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
