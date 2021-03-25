import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, chooseTab, currentTabId }) => (
  <div className="tab">
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => chooseTab(tab.id)}
        className={classNames(
          'tab__button',
          { tab__button__active: currentTabId === tab.id },
        )}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tittle: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  chooseTab: PropTypes.func.isRequired,
  currentTabId: PropTypes.string.isRequired,
};
