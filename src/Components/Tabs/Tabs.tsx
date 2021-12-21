import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (chosenTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => (
  <div className="tab">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="submit"
        onClick={() => {
          if (tab.id !== selectedTabId) {
            onTabSelected(tab);
          }
        }}
        className={classNames(
          'tab__button',
          { 'button--selected': selectedTabId === tab.id },
        )}
      >
        {tab.title}
      </button>
    ))}
  </div>
);
