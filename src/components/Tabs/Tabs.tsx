import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <ul className="nav nav-tabs mt-3">
        {tabs.map(tab => (
          <li key={tab.id}>
            <a
              href="tab.id"
              onClick={(event) => {
                event.preventDefault();
                onTabSelected(tab);
              }}
              className={classNames('nav-link', {
                active: tab.id === selectedTabId,
              })}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
