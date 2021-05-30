import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const target = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <div className="tabs-linck">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            onClick={
              () => (selectedTabId !== tab.id) && onTabSelected(tab)
            }
            className={
              classNames(
                'tabs-linck__item tabs-button',
                { 'tab-selected': target.id === tab.id },
              )
            }
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p
        className="tabs-content"
      >
        {target.content}
      </p>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
