import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = ({ tabs, selectedApp, onTabSelected }) => (
  <>
    <ul className="Tabs__list">
      {tabs.map(({ id, title }) => (
        // eslint-disable-next-line
        <li
          key={id}
          onClick={() => {
            onTabSelected(id);
          }}
          className={classNames(
            'Tabs__item',
            { Tabs__item_select: id === selectedApp.id },
          )}
        >
          {title}
        </li>
      ))}
    </ul>
    <p className="Tab__text">
      {selectedApp.content}
    </p>
  </>
);

const tab = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    tab,
  ).isRequired,
  selectedApp: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
