import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, currentIndex, selectTab }) => (
  <div>
    {tabs.map((tab, index) => (
      <button
        type="button"
        key={tab.title}
        onClick={() => selectTab(index)}
        className={classnames('button',
          { 'button--active': currentIndex === index })
        }
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
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
};
