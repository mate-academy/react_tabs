import React from 'react';
import './Tabs.scss';
import classnames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  const changeTab = (tab: Tab) => {
    if (selectedTab !== tab) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div className="buttons is-centered container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={classnames('button is-rounded', {
              'button__is-active': selectedTab === tab,
            })}
            onClick={() => changeTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="container container-content">
        <p className="content" data-cy="tab-content">
          {selectedTab.content}
        </p>
      </div>
    </>
  );
};
