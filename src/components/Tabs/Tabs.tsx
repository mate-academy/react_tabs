import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Tab';

interface Props {
  tabs: Tab[];
  tabId: string;
  onClick: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs, tabId, onClick,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={classNames({ 'is-active': tabId === id })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                onClick={() => onClick(id)}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && tabs.find(tab => tab.id === tabId)?.content}
      </div>
    </div>
  );
};
