import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  changeSelected(el: Tab): void;
};

const TabComponent: React.FC<Props> = ({ tabs, selectedTabId, changeSelected }) => {
  const selectedTab = tabs.find((el: Tab) => el.id === selectedTabId);

  return (
    <>
      <div className="tab__list">
        {tabs.map((el: Tab) => {
          return (
            <button
              type="button"
              className={selectedTabId === el.id ? 'tab tab__active' : 'tab'}
              onClick={() => changeSelected(el)}
            >
              {el.title}
            </button>
          );
        })}
      </div>
      <div
        className="tab__main"
      >
        <h1>
          Selected tab is&nbsp;
          {selectedTabId}
        </h1>
        {selectedTab?.content}
      </div>
    </>
  );
};

export default TabComponent;
