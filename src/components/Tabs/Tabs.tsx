/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface Type {
  tabsArr: {
    id: string;
    title: string;
    content: string;
  }[],

  selectedTabId: string,

  onTabSelected: (tabId: string)=> void,

  selecetedContent: string;

}

export const Tabs: React.FC<Type> = ({
  tabsArr,
  selectedTabId,
  onTabSelected,
  selecetedContent,
}) => {
  return (
    <>
      <div className="tabs is-boxed" data-cy="TabContent">
        <ul>
          {tabsArr.map((tab) => {
            return (
              <li className={selectedTabId === tab.id ? 'is-active' : ''}>
                <a
                  onClick={() => onTabSelected(tab.id)}
                  key={tab.id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => onTabSelected(tab.id)}
                >
                  {tab.id}
                </a>
              </li>

            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selecetedContent}
      </div>
    </>

  );
};
