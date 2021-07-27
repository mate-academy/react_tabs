import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, choose, selectedTab }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        tab !== selectedTab
          ? (
            <button
              className="tab"
              type="button"
              onClick={() => {
                choose(tab);
              }}
            >
              {tab.title}
            </button>
          ) : (
            <button
              className="selectedTab"
              type="button"
            >
              {tab.title}
            </button>
          )))}
    </div>
    <div className="content">
      {selectedTab.content}
    </div>
  </>
);

Tabs.propTypes = {
  choose: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    style: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
