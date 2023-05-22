import React, { useState } from 'react';

import { Tab } from '../../type/Tabs';

interface TabsProps {
  tabs: Tab[];
  clickedContent: (elem: string) => void;
}

export const TabList: React.FC<TabsProps> = ({ tabs, clickedContent }) => {
  const [classNameValue, SetClassNameValue] = useState('tab-1');

  const getClassName = (className: string) => {
    SetClassNameValue(className);

    clickedContent(className);
  };

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            className={classNameValue === tab.id ? 'is-active' : ''}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => getClassName(tab.id)}
            >
              {tab.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
