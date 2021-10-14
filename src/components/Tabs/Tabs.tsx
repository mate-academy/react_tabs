import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          onClick={() => (
            onTabSelected(tab)
          )}
          className={classNames('tab', { 'tab--active': selectedTabId === tab.id })}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
