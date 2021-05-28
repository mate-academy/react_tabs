import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = React.memo(
  ({
    tabsList,
    selectedTabId,
    onClick,
  }) => (
    <>
      <ul className="tabs">
        {tabsList.map(tab => (
          // eslint-disable-next-line
          <li
            className={classNames(
              'tabs__switcher',
              { tabs__switcher_active: tab.id === selectedTabId },
            )}
            key={tab.id}
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onClick(tab.id);
              }
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </>
  ),
);

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
