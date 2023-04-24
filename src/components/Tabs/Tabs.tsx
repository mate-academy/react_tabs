import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Tab';

interface Props {
  tabs: Tab[];
  tabId: string;
  content: string;
  onClick: (index: number) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs, tabId, content, onClick,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }, index) => (
            <li
              className={classNames({ 'is-active': tabId === id })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                onClick={() => onClick(index)}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
