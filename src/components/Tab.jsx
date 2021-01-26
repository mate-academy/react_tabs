import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected, index }) => (
  <div className="m-5">
    {tabs.map((tab, i) => (
      <button
        className={`button is-outlined ${
          index === i ? 'is-focused' : ''}`
        }
        key={tab.title}
        type="button"
        onClick={() => onTabSelected(index, tab.content)}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
  }).isRequired).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  index: PropTypes.number,
};

Tabs.defaultProps = {
  index: null,
};
