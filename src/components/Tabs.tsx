import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTabId } = props;
  const selectedTabContent: string = tabs.filter((tab: Tab) => tab.id === selectedTabId)[0].content;

  return (
    <>
      <div className="tabs">
        {tabs.map((tab: Tab) => (
          <button
            className={classNames('tabs__button', {
              'tabs__button--selected': selectedTabId === tab.id,
            })}
            key={tab.id}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p className="tab__content">
        {selectedTabContent}
      </p>
    </>
  );
};

export default Tabs;
