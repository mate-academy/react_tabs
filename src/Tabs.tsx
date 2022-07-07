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
      {tabsList.map((singleTab) => (
        <>
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
              {singleTab.title}
            </button>
          </div>
        </>
      ))}
      <p className="tab__content">
        {tabsList.find(tab => selectedTabId === tab.id)?.content}
      </p>
    </div>
  );
};
