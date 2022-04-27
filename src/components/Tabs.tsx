import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="buttons">
        {tabs.map(tab => (
          <li
            className={tab.id === selectedTabId ? 'buttons__item' : ''}
            key={tab.id}
          >
            <button
              type="submit"
              className={classNames(
                'button',
                {
                  button__active: tab.id === selectedTabId,
                },
              )}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="content">
        {tabs.map(tab => (tab.id === selectedTabId && tab.content))}
      </div>
    </>
  );
};

export default Tabs;
