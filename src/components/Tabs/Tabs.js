import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            onTabSelected(tab.id);
          }}
          className={tab.id === selectedTabId
            ? 'button__active'
            : 'button'}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="text">{tabs.find(tab => tab.id === selectedTabId).content}</p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
