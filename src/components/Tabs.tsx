/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

import Tab from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (x: any) => void,
};

const Tabs :React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="Tabs">
        {tabs.map(tab => (
          <button
            type="button"
            name={tab.id}
            onClick={onTabSelected}
            className={classNames({ 'Tabs__button--selected': selectedTabId === tab.id, Tabs__button: true })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="Tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};

export default React.memo(Tabs);
