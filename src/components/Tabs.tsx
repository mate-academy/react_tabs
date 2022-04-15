import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div className="tables">
      <div className="tables__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className={classNames(
              'tables__buttons__button',
              { selected: tab.id === selectedTabId },
            )}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tables__content">
        <p className="tables__content__description">
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </p>
      </div>
    </div>
  );
};
