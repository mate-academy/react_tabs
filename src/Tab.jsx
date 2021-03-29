import React from 'react';
import PropTypes from 'prop-types';

export function Tab({
  tabs,
  selectedTads,
  selectedTab,
}) {
  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className="tabs__button"
            onClick={() => {
              selectedTab(tab);
            }}
          >
            {tab.title}
          </button>
        ))}
        <p className="tabs__content">
          {selectedTads.content}
        </p>
      </div>
    </>
  );
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  selectedTads: PropTypes.objectOf(
    PropTypes.shape({
      content: PropTypes.string,
    }),
  ).isRequired,
  selectedTab: PropTypes.func.isRequired,
};
