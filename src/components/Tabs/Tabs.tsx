import React, { useState } from 'react';
import { TabsProps } from './interface';

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">
        {`Selected tab is ${tabs[isActive].title}`}
      </h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tabItem, index) => {
            return (
              <li
                className={`${index === isActive ? 'is-active' : ''}`}
                data-cy="Tab"
                key={tabItem.id}
              >
                <a
                  href={`#${tabItem.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    setIsActive(index);
                  }}
                >
                  {tabItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs[isActive].content}
      </div>
    </div>
  );
};

export default React.memo(Tabs);
