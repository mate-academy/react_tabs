import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabId = tabs[0].id,
  onTabSelected,
}) => (
  <div>
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button
          type="button"
          key={tab.id}
          className={
            classNames('tab', { selected: (tab.id === selectedTabId) })
          }
          onClick={() => {
            onTabSelected(tab.id);
          }}
          onKeyUp={() => {
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <textarea
      value={tabs.find(tab => tab.id === selectedTabId).content}
      className="content"
      readOnly
    />
  </div>
);

const TabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabType).isRequired,
  selectedTabId: PropTypes.string,
  onTabSelected: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  selectedTabId: 0,
};
