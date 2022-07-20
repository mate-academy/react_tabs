import classNames from 'classnames';
import React from 'react';
import '../../App.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  return (
    <>
      <ul className="list tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="list__item"
          >
            <button
              type="button"
              className={classNames(
                'button',
                { 'is-large': tab.id === selectedTabId },
              )}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="notification is-small cooltext">
        It was a long way You have made.
        But at least you did right coice!
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorum, similique.
        Now you can read:
      </div>
    </>
  );
};
