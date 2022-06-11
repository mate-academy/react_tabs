// implement a component here
import React from 'react';

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
    <div>
      {tabsList.map(singleTab => (
        <div key={singleTab.id}>
          <button
            type="button"
            onClick={() => {
              onTabSelected(singleTab);
            }}
          >
            {singleTab.id}
          </button>
          {selectedTabId === singleTab.id
          && (
            <p>
              {singleTab.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
