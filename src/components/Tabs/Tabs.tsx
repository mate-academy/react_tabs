import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type OnSelect = (tab: Tab) => void;

interface Props {
  tabs: Tab[];
  onTabSelected: OnSelect;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => (
  <div className="Tab__button">
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="submit"
        className={classNames('Tab__button-regular button', { 'Tab__button-selected button': tab.id === selectedTabId })}
        onClick={() => onTabSelected(tab)}
      >
        {tab.id}
      </button>
    ))}

  </div>
);
