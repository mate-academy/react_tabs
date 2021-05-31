import React from 'react';
import propTypes from 'prop-types';

export function Tabs({ tabs, selectedTab, changeTab }) {
  return (
    <div className="tabs-container">
      {tabs.map(({ id, title, content }) => (
        <div key={id} className="tab-item">
          <button
            type="submit"
            className="title-btn"
            onClick={() => changeTab(id, title)}
          >
            <h2>
              {title}
            </h2>
          </button>
          <div className="text">
            {id === selectedTab && content}
          </div>
        </div>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf({
    tab: propTypes.string.isRequired,
  }).isRequired,
  selectedTab: propTypes.string.isRequired,
  changeTab: propTypes.func.isRequired,
};
