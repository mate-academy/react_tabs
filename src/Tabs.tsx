import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  children,
}) => {
  return (
    <>
      <ul className="nav nav-tabs mb-3">
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTabId,
              })}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {children}
    </>
  );
};

export default Tabs;
