import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <div className="tabs is-centered is-medium is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames('', {
              'is-active': tab.id === selectedTabId,
            })}
          >
            <a
              href="#/"
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <p className="has-text-centered">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  onTabSelected: PropTypes.func.isRequired,

  selectedTabId: PropTypes.string.isRequired,
};
