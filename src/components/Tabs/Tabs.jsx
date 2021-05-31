import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="tabs">
    <ul className="tabs__list">
      {tabs.map(({ id, title }) => (
        <li key={id} className="tabs__item">
          <a
            className={classNames(
              'tabs__link',
              {'tabs__link--active': id === selectedTab.id}
            )}
            onClick={(event) => {
              event.preventDefault();
              onTabSelected(id);
            }}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
    <p className="tabs__content">
      {selectedTab.content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onTabSelected: PropTypes.func.isRequired,
};
