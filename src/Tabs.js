import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, index }) => (
  <div>
    {tabs.map((tab, i) => (
      <button
        className={classNames('button', { active: i === index })}
        type="button"
        key={tab.title}
        onClick={() => onTabSelected(i)}
      >
        {tab.title}
      </button>
    ))}

    <div className="content">
      {tabs[index].content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
