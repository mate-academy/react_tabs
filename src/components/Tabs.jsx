import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss'

export const Tabs = ({ tabs, selectedTabId, onTabSelected}) => {
  return (
    <>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type='button'
          onClick={() => onTabSelected(tab)}
          className="btn btn-info btn-lg"
        >
          {tab.title}
        </button>
      ))}
      <h4>
        {selectedTabId.content}
      </h4>
    </>
  )
}

const tabTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(tabTypes).isRequired,
  selectedTabId: tabTypes.isRequired,
};
