import classNames from 'classnames';
import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Array<Tab>,
  selectedTabId: string,
  setSelectedTab: (tabId:string) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, setSelectedTab } = props;

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <button
              className={classNames('tabs__tab_btn',
                {
                  tabs__tab_btn__selected: tab.id === selectedTabId,
                })}
              type="button"
              onClick={() => {
                setSelectedTab(tab.id);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs__selected-tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
