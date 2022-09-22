import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../type';

type Props = {
  tabs:Tab[]
  isActiveId: string;
  setActiveId:(tab: Tab) => void;

};

export const Tabs:React.FC <Props> = ({
  tabs,
  isActiveId,
  setActiveId,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              { 'is-active': tab.id === isActiveId },
            )}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => setActiveId(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
