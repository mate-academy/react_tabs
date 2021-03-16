import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div>
      <ul className="tab-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={ClassNames(
              'tab-list__item',
              { selected: tab.id === selectedTab.id },
            )}
          >
            <button
              type="button"
              className="tab-list__button"
              onClick={() => {
                if (tab.id === selectedTab.id) {
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
        {selectedTab.content}
      </p>

    </div>
  );
};

const tabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabType).isRequired,
  selectedTab: tabType.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
