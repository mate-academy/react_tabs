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

  // let selectedButton = 'btn';

  // if (selectedTabId.id !== 'tab-1') {
  //   selectedButton += ' select';
  // }

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
                // className={selectedButton}
                onClick={() => onTableSelected(tab.id)}
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
