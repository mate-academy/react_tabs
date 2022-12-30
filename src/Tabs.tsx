import classNames from 'classnames';
import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={classNames({ 'is-active': id === selectedTab.id })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={onTabSelected}
              >
                {title}
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

export default Tabs;
