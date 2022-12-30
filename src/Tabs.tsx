import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const [tabContent, setTabContent] = useState('');

  useEffect(() => {
    const [currentTabContent] = tabs.filter(tab => tab.id === selectedTabId);

    setTabContent(currentTabContent.content);
  }, [selectedTabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={classNames({ 'is-active': id === selectedTabId })}
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
        {tabContent}
      </div>
    </div>
  );
};

export default Tabs;
