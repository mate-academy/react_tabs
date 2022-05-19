import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

interface Props {
  tabs: Tab [],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div className="tabs">
      { tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={classNames(
            'tabs__item',
            { 'tabs__item--selected': selectedTab === tab },
          )}
          onClick={() => onTabSelected(tab)}
        >
          <h2 className="tabs__title">
            { tab.title }
          </h2>
        </button>
      )) }
      <div className="tabs__content">
        { selectedTab.content }
      </div>
    </div>
  );
};
