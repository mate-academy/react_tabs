import classNames from 'classnames';
import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Array<Tab>,
  selectedTabId: string,
  setSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, setSelectedTab } = props;

  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabs.map(tab => (
          <div
            key={tab.id}
          >
            <button
              className={classNames('tabs__tab_btn',
                {
                  tabs__tab_btn__selected: tab.id === selectedTabId,
                })}
              type="button"
              onClick={() => {
                setSelectedTab(tab);
              }}
            >
              {tab.title}
            </button>
            <div className="tabs__selected-tab-content">

              {selectedTabId === tab.id && (
                <p className="tab__content">
                  {tab.content}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
