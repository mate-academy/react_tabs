import React from 'react';

interface Type {
  tabsArr: {
    id: string;
    title: string;
    content: string;
  }[],

  selectedTabId: string,

}

export const Tabs: React.FC<Type> = ({
  tabsArr,
  selectedTabId,
}) => {
  return (
    <div className="block" data-cy="TabContent">
      {tabsArr.map((tab) => {
        return (
          <span key={tab.id}>
            {selectedTabId === tab.id ? tab.content : ''}
          </span>
        );
      })}
    </div>

  );
};
