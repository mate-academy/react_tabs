import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  selectTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {props.tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => props.selectTab(tab)}
            className={classNames('button',
              {
                'button--selected': tab.id === props.selectedTab.id,
              })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__main">{props.selectedTab.content}</div>
    </div>
  );
};
