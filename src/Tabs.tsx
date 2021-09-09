import React from 'react';
import classNames from 'classnames';
import './App.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectTab: (currentTab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <a
              href={tab.id}
              className={classNames('Tab nav-link', {
                // eslint-disable-next-line quote-props
                'active': tab.id === selectedTabId,
              })}
              onClick={(event) => {
                event.preventDefault();
                selectTab(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
