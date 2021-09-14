import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  activeTabId: string;
  changeTab: (value: Tab) => void;
};

export const Tab: React.FC<Props> = (props) => {
  const { tabs, activeTabId, changeTab } = props;

  return (
    <>
      <nav className="nav nav-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={(event) => {
              event.preventDefault();
              changeTab(tab);
            }}
            className={classNames(
              'nav-link',
              {
                active: tab.id === activeTabId,
              },
            )}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      <p className="fs-3 text-justify">
        {tabs.find((tab) => tab.id === activeTabId)?.content}
      </p>
    </>
  );
};
