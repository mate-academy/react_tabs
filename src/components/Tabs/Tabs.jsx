import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ option, tabs, selected }) => (
  <>
    <div className="tabslist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={
            classNames(
              'tabslist__tab',
              { activeTab: tab.id === selected.id },
            )
          }
          onClick={() => option(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    {tabs.map(tab => (
      <div
        key={tab.id}
        className={
          classNames(
            'tabslist__tab-content',
            { show: tab.id === selected.id },
          )
        }
      >
        {tab.content}
      </div>
    ))}
  </>
);

Tabs.propTypes = {
  option: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  selected: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
