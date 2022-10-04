import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectTabFunction: (selectTab: Tab) => void;
  selectTabObj: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectTabFunction,
  selectTabObj,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': selectTabObj.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
                onClick={() => {
                  return selectTabFunction(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTabObj.content}
      </div>
    </div>
  );
};
