import React from 'react';
import Proptypes from 'prop-types';

export const TabsForm = ({
  onChange,
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
              onChange(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="content">
      {tabs.map((tab) => {
        if (tab.id !== selectedTabId) {
          return null;
        }

        return <p key={tab.id}>{tab.content}</p>;
      })}
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
  onChange: Proptypes.func.isRequired,
  selectedTabId: Proptypes.string.isRequired,
};
