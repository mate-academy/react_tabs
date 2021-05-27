import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = React.memo(
  ({
    tabsList,
    selectedTab,
    onClick,
  }) => (
    <>
      <ul className="tabs">
        {tabsList.map((tab) => {
          if (tab.id === selectedTab.id) {
            return (
              <li
                className="tabs__switcher tabs__switcher_active"
                key={tab.id}
              >
                {tab.title}
              </li>
            );
          }

          return (
            // eslint-disable-next-line
            <li
              className="tabs__switcher"
              key={tab.id}
              onClick={() => {
                onClick(tab.id);
              }}
            >
              {tab.title}
            </li>
          );
        })}
      </ul>

      <p className="content">
        {selectedTab.content}
      </p>
    </>
  ),
);

const tabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    tabType,
  ).isRequired,
  selectedTab: tabType.isRequired,
  onClick: PropTypes.func.isRequired,
};
