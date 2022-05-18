import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  setTabSelected: (currentTab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTab,
    setTabSelected,
  } = props;

  return (
    <div className="tab">
      {tabs.map(tab => (
        <div key={tab.id} className="tab__item">
          <button
            className="tab__button"
            type="button"
            onClick={() => setTabSelected(tab)}
          >
            {tab.title}
          </button>
          <h2 className="tab__content">
            {selectedTab === tab.id ? tab.content : ''}
          </h2>
        </div>
      ))}
    </div>
  );
};
