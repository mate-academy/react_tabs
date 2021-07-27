import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({ tabs, selectedId, content, onClick }) => (
  <div>
    <ul className="list">
      {tabs.map(tab => (
        <li key={tab.id} className="list-item">
          <button
            type="button"
            className={`button ${selectedId === tab.id ? 'active' : ''}`}
            onClick={() => onClick(tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p className="content">
      {content}
    </p>
  </div>
));

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
