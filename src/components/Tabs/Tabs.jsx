import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({ tabs, selectedTabId, onTabSelected }) => {
  const currentTabContent = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul>
        {tabs.map((tab) => {
          const { id, title } = tab;
          const activeTab = classNames({
            active: selectedTabId === tab.id,
          });

          return (
            <li key={id} className={activeTab}>
              <button
                type="button"
                onClick={() => {
                  onTabSelected(tab);
                }}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <p>{currentTabContent.content}</p>
    </div>
  );
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
