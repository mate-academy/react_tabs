import React, { useState } from 'react';

import { Tab } from '../../type/Tabs';

interface TabsProps {
  tabs: Tab[];
  clickedContent: (elem: string) => void;
}

export const TabList: React.FC<TabsProps> = ({ tabs, clickedContent }) => {
  const [classNameValue, setClassNameValue] = useState('tab-1');
  const [contentText, setContentText] = useState(tabs[0].content);

  const getClassName = (className: string) => {
    setClassNameValue(className);
    clickedContent(className);

    const selectedTab = tabs.find((tab) => tab.id === className);

    if (selectedTab) {
      setContentText(selectedTab.content);
    }
  };

  return (
    <div data-cy="TabsComponent">
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
      <div className="block" data-cy="TabContent">
        {contentText}
      </div>
    </div>
  );
};
