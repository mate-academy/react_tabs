import React from 'react';
import './Tabs.scss';

type Props = {
  tabChangeMethod: (tabId: Tab) => void,
  tabs: Tab[],
  selectedTabId: string,
};

export const Tabs:React.FC<Props> = ({
  tabChangeMethod,
  tabs,
  selectedTabId,
}) => {
  const selectedObj = tabs.find(tab => tab.id === selectedTabId);

  const classNameMetod = (currentTabId: string) => {
    if (currentTabId === selectedTabId) {
      return 'tabs__button active';
    }

    return 'tabs__button';
  };

  return (
    <div className="tabs">
      <div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={classNameMetod(tab.id)}
            type="button"
            name={tab.title}
            onClick={() => tabChangeMethod(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <h2 className="tabs__title">
        {selectedObj?.content || tabs[0].content}
      </h2>
    </div>
  );
};
