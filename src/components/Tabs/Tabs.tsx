/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface Props {
  tabsArr: {
    id: string;
    title: string;
    content: string;
  }[],

  selectedTabId: string,

  setTabId: (tabId: string)=> void,

}

export const Tabs: React.FC<Props> = ({
  tabsArr,
  selectedTabId,
  setTabId,
}) => {
  const selecetedContent = tabsArr.find(tab => tab.id === selectedTabId);

  const newContent = selecetedContent?.content;

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
                  href={`#${tab.id}`}
                  onClick={() => setTabId(tab.id)}
                  role="button"
                >
                  {tab.title}
                </a>
              </li>

            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {newContent}
      </div>
    </>

  );
};
