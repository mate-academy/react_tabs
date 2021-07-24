import React from 'react';
import PropTypes, { shape } from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentContent = tabs.find(tab => tab.id === selectedTabId).content;

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab) => {
          const btnClass = classNames({
            'nav-link': true,
            active: tab.id === selectedTabId,
          });

          return (
            <li key={tab.id} className="nav-item">
              <button
                className={btnClass}
                type="button"
                onClick={onTabSelected}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <p>{currentContent}</p>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
