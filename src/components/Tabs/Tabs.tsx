import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

const Tabs:React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  return (
    <div className="field has-addons">
      {tabs.map((tab) => (
        <p className="control">
          <button
            type="button"
            className={classNames(
              'button is-medium',
              { 'is-success': tab.id === selectedTabId },
            )}
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </p>
      ))}
    </div>
  );
};

export default Tabs;
