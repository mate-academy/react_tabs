import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <div>
    {tabs.map(tab => (
      <button
        onClick={onTabSelected}
        key={tab.id}
        value={tab.id}
        type="button"
        className="btn"
      >
        {tab.title}
      </button>
    ))}

    <p>{tabs.find(tab => tab.id === selectedTabId).content}</p>
  </div>
);

const TypeTabs = PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TypeTabs).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};

export default Tabs;
