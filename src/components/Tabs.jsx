import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const hangleClick = (event, id) => {
    event.preventDefault();
    onTabSelected(id);
  };

  return (
    <ul className="tab">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className={classnames({
              tab__item: true,
              active: tab.id === selectedTabId,
            })}
            onClick={event => hangleClick(event, tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

const tabType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabType).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
