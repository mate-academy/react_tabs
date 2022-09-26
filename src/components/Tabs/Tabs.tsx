import classNames from 'classnames';
import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  // const { id, title, content } = tabs;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              key={id}
              className={classNames({
                'is-active': selectedTabId === id,
              })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map((tab) => tab.id === selectedTabId && tab.content)}
      </div>
    </div>
  );
};
