import classNames from 'classnames';
import React from 'react';

interface Props {
  selectedTabId: string;
  tabs: Tab[];
  changeTab: (value: string) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { selectedTabId, tabs, changeTab } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => changeTab(tab.id)}
              className={classNames({
                'nav-link': true,
                active: tab.id === selectedTabId,
              })}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
