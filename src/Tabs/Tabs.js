import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({ selectedTab, tabs, onSelect }) => (
  <>
    <ul className="tabrow">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames({
            selected: tab.id === selectedTab.id,
          })}
        >
          <a
            href="./"
            onClick={(event) => {
              event.preventDefault();
              onSelect(tab);
            }}
          >
            {' '}
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
    <div className="text">
      <p>{selectedTab.content}</p>
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,

    }),
  ).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
