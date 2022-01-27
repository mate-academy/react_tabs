import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const findSelectedTab = () => props.tabs.find(tab => tab.id === props.selectedTabId)
    || props.tabs[0];
  const checkSelectedTab = (tab: Tab) => {
    if (props.selectedTabId !== tab.id) {
      return props.selectTab(tab);
    }

    return null;
  };

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {props.tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => checkSelectedTab(tab)}
            className={classNames('button',
              {
                'button--selected': tab.id === props.selectedTabId,
              })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__main">{findSelectedTab().content}</div>
    </div>
  );
};
