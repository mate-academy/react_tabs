import React from 'react';

type Props = {
  tabChangeMethod: (tabId: string) => void,
  tabs: Tab[],
  selectTabId: string,
};

export const Tabs:React.FC<Props> = ({
  tabChangeMethod,
  tabs,
  selectTabId,
}) => {
  const classNameMetod = (currentTabId: string) => {
    if (currentTabId === selectTabId) {
      return 'button active';
    }

    return 'button';
  };

  return (
    <>
      <div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={classNameMetod(tab.id)}
            type="button"
            name={tab.title}
            id={tab.id}
            onClick={() => tabChangeMethod(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        <h2>
          {tabs.find(tab => tab.id === selectTabId)?.title}
        </h2>
      </div>
    </>
  );
};
