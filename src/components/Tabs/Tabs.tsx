import classNames from 'classnames';
import React from 'react';

import { Tab } from '../../type/Tab';

type Callback = (id: number) => void;

type Props = {
  tabs: Tab[];
  selectedTab : number;
  changeTab: Callback;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab: selectedTabId,
  changeTab: handleClick,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }, index) => (
            <li
              className={classNames(
                {
                  'is-active': index === selectedTabId,
                },
              )}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleClick(index)}
              >
                {title}
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
