import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <div>
      <ul className="tab-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={ClassNames(
              'tab-list__item',
              { selected: tab.id === selectedTabId },
            )}
          >
            <button
              type="button"
              className="tab-list__button"
              onClick={() => {
                if (tab.id === selectedTabId) {
                  return;
                }

                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="tab__text">
        {tabs.find(tab => tab.id === selectedTabId).content}
      </p>

    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
