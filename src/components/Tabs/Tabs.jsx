import React from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selected = tabs.find(
    tab => tab.id === selectedTabId,
  );

  return (
    <div className="container">
      <ul className="list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={
                tab.id === selectedTabId
                  ? 'button button-active'
                  : 'button'
              }
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          </li>

        ))}
      </ul>
      <p>
        {`${selected.content}`}
      </p>
    </div>
  );
});

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
