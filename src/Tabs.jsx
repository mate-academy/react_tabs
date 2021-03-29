import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div>
      {tabs.map(tab => (
        <div
          className="tabButton"
          key={tab.id}
        >
          <button
            type="submit"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </div>
      ))}

      <div>
        {tabs.find(tab => tab.id === selectedTab.id).content}
      </div>
    </div>
  </>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
