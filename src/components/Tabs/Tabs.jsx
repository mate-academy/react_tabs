import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" role="presentation" key={tab.id}>
          <button
            onClick={() => onTabSelected(tab.id)}
            className={classNames('nav-link',
              { active: tab.id === selectedTabId })}
            type="button"
            role="tab"
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>

    <div className="tab-content">
      {tabs.find(tab => (tab.id === selectedTabId)).content}
    </div>
  </>
);

Tabs.propTypes = PropTypes.shape({
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
}).isRequired;

export default Tabs;
