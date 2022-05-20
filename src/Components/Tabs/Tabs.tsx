import React from 'react';
import classNames from 'classnames';
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

  return (
    <div className="tabs">
      <div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={classNames(
              'tabs__button', { active: tab.id === selectedTabId },
            )}
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
