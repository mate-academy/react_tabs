import classNames from 'classnames';
import React from 'react';

type Props = {
  allTabs: Tab[];
  tabSelected: Tab;
  onTabSelected: CallableFunction;
};

export const Tabs: React.FC<Props> = ({
  allTabs,
  tabSelected,
  onTabSelected,
}) => {
  return (
    <>
      <div className="tabs">
        {allTabs.map(tab => (
          <button
            className={classNames(
              'tabs__item',
              { tabs__item__active: tabSelected === tab },
            )}
            key={tab.id}
            type="button"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab__content">
        <p>{tabSelected.content}</p>
      </div>
    </>

  );
};
