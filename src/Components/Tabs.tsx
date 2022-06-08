import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Tab } from '../react-app-env';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  onClick: (id: string)=> void,
  selectedTabId: string,
  onTabSelected: (id: string)=> void,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onClick,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => {
  useEffect(() => {
    onTabSelected(selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <div className="Tabs">
        {tabs.map(tab => (
          <button
            type="button"
            className={classNames('Tab btn btn-info', {
              Tab__selected: tab.id === selectedTabId,
            })}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <h3
              className={classNames('TabTitle', {
                TabTitle__selected: tab.id === selectedTabId,
              })}
            >
              {tab.title}
            </h3>
          </button>
        ))}
      </div>
      <div className="card">
        <div className="card-body">
          <p
            className="card-title"
            data-cy="tab-content"
          >
            {selectedTab.content}
          </p>
        </div>
      </div>
    </>
  );
};
