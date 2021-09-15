import React from 'react';
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <>
      <div className="Tabs nav nav-tabs">
        {tabs.map(tab => (
          <a
            href={tab.id}
            className={classNames('nav-link', {
              active: tab.id === selectedTabId,
            })}
            onClick={event => {
              event.preventDefault();
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <p className="mt-3">
        {tabs.find(chosenTab => chosenTab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
