import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = ({ tabs, getSelect, index }) => (
  <div className="Tabs">
    {tabs.map((tab, i) => (
      <button
        key={tab.title}
        type="button"
        className={classNames('Tabs__button',
          { 'Tabs__button--selected': i === index })}
        onClick={(e) => {
          getSelect(i);
        }}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  getSelect: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
