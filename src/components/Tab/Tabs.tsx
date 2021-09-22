import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  onTableSelected: (tabId: string) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTableSelected, selectedTabId } = props;

  return (
    <>
      <div className="card-link">

        {tabs.map((tab) => {
          return (
            <div key={tab.id}>
              <button
                type="submit"
                className={classNames(
                  'nav-link',
                  'btn',
                  {
                    active: tab.id === selectedTabId.id,
                  },
                )}
                onClick={() => {
                  if (tab.id) {
                    onTableSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </button>
            </div>
          );
        })}

      </div>

      <div className="card-text">
        {selectedTabId.content}
      </div>
    </>
  );
};
