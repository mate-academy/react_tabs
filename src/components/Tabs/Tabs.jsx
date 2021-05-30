import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, selectTab }) => (
  <div className="Tabs">
    <div className="Tabs__header">
      {
  tabs.map(({ title, id }) => (
    <button
      key={id}
      type="button"
      className={classNames('Tabs__title', {
        'Tabs__title-selected': +id.slice(4) === selectedTabId,
      })}
      onClick={(event) => {
        selectTab(+id.slice(4));
      }}
    >
      {title}
    </button>
  ))
    }
    </div>
    <p>{tabs[selectedTabId - 1].content}</p>
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
  selectedTabId: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
};
