import React from 'react';
import './Tabs.scss';

type Props = {
  tabsList : Tab[];
  selectedTabId : string;
  onTabSelected : (tab : Tab) => void,
};

export const Tabs : React.FC<Props> = ({
  tabsList,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div className="container">
      {tabsList.map((singleTab, index) => (
        <div
          key={singleTab.id}
          className="tab"
        >
          <button
            type="button"
            className="tab__pick"
            onClick={() => {
              onTabSelected(singleTab);
            }}
          >
            {`Tab ${index + 1}`}
          </button>
          {selectedTabId === singleTab.id
          && (
            <p className="tab__content">
              {singleTab.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
