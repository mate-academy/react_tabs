import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTab, selectedId }) => (
  <>
    <div className="container">
      {tabs.map(tab => (
        <button
          className={classNames(
            'container__tab',
            { 'container__tab--active': selectedId === tab.id },
          )}
          type="button"
          key={tab.id}
          onClick={() => selectedTab(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>

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
  selectedId: PropTypes.string.isRequired,
  selectedTab: PropTypes.func.isRequired,
};
