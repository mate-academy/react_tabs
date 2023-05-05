/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface Type {
  tabsArr: {
    id: string;
    title: string;
    content: string;
  }[],

  selectedTabId: string,

  setTabId: (tabId: string)=> void,

}

export const Tabs: React.FC<Type> = ({
  tabsArr,
  selectedTabId,
  setTabId,
}) => {
  const selecetedContent = tabsArr.find(tab => tab.id === selectedTabId);

  let newContent = selecetedContent?.content;

  if (newContent === undefined) {
    newContent = tabsArr[0].content;
  }

  return (
    <>
      <div className="tabs is-boxed" data-cy="TabContent">
        <ul>
          {tabsArr.map((tab) => {
            return (
              <li
                key={tab.id}
                className={selectedTabId === tab.id ? 'is-active' : ''}
              >
                <a
                  data-cy="TabLink"
                  href={`#${selectedTabId}`}
                  onClick={() => setTabId(tab.id)}
                  key={tab.id}
                  role="button"
                  onKeyDown={() => setTabId(tab.id)}
                >
                  {tab.title}
                </a>
              </li>

            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        <span data-cy="tab-content">
          {newContent}
        </span>

      </div>
    </>

  );
};
