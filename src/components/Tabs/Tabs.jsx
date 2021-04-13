import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabsFromServer,
  selectedTabId,
  tabOnChanged,
}) => (
  <>
    <ul>
      {
        tabsFromServer.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => tabOnChanged(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </ul>
    <div>
      {tabsFromServer.find(tab => tab.id === selectedTabId).content}
    </div>
  </>
);

Tabs.propTypes = {
  tabsFromServer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  tabOnChanged: PropTypes.func.isRequired,
};
