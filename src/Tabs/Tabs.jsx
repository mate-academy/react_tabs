import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export function Tabs({ tabs, onClick, selectedTabContent, selectedTabId }) {
  return (
    <div className="card">
      <div className="btn-group">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onClick(tab)}
            className={classNames('btn btn-primary', {
              active: tab.id === selectedTabId,
            })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="card-body">
        {selectedTabContent}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedTabContent: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
