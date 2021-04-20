import React from 'react';
import Proptypes from 'prop-types';

export const TabsForm = ({
  selectTab,
  tabs,
  selectedTabId,
}) => (
  <>
    <div className="buttons">
      {tabs.map(tab => (
        <button
          type="submit"
          key={tab.id}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              selectTab(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="content">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </>
);

TabsForm.propTypes = {
  tabs: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      content: Proptypes.string.isRequired,
    }),
  ).isRequired,
  selectTab: Proptypes.func.isRequired,
  selectedTabId: Proptypes.string.isRequired,
};
