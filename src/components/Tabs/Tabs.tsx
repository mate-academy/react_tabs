import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Callback = (currentTab: Tab) => void;

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
}

export const Tabs:React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <div className="button">
        {tabs.map(tab => (
          <button
            className={classNames('button__tabs',
              {
                'button__tabs--active': tab.id === selectedTabId,
              })}
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <h2 className="button__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </h2>
    </>
  );
};
