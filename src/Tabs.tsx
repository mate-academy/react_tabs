import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: OnTabSelected,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const contentToView = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div className="tabs">
      <div className="tabs__wrap-button">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={
              classNames('button is-primary',
                { 'is-success': tab.id === selectedTabId })
            }
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__wrap-content content is-normal">
        <p
          data-cy="tab-content"
          className="tabs__content"
        >
          {contentToView}
        </p>
      </div>
    </div>
  );
};
