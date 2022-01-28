import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  changeContent: (id:string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  changeContent,
  children,
}) => {
  const selectTab = (tabId: string):void | string => {
    if (selectedTabId !== tabId) {
      return changeContent(tabId);
    }

    return selectedTabId;
  };

  return (
    <>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                type="button"
                className="button button is-info-light"
                onClick={() => selectTab(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p>{children}</p>
    </>

  );
};
