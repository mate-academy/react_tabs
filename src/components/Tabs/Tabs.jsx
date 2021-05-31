import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, selectTab, selectedTabContent }) => (
  <div className="Tabs">
    <div className="Tabs__header">
      {tabs.map(({ title, id }) => (
        <button
          key={id}
          type="button"
          className={classNames('Tabs__title', {
            'Tabs__title-selected': id === selectTab.id,
          })}
          onClick={() => {
            selectTab(id);
          }}
        >
          {title}
        </button>
      ))
    }
    </div>
    <p>{selectedTabContent}</p>
  </div>

);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      },
    ),
  ).isRequired,
  selectTab: PropTypes.func.isRequired,
  selectedTabContent: PropTypes.string.isRequired,
};
