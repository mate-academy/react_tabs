import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, id, onTabSelected }) => (
  <>
    <ul className="list">
      {tabs.map(tab => (
        <li key={tab.id} className="item">
          <div
            className={classNames('item_title', {
              active: tab.id === id,
            })}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </div>
        </li>
      ))}
    </ul>

    <p className="content">
      {tabs.find(tab => id === tab.id).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  id: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
