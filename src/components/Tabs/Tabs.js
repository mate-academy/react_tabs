import React from 'react';
import './Tabs.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, tabID, onTabSelected }) => (
  <div className="tabLinks">
    {tabs.map(tab => (
      <React.Fragment key={tab.id}>
        <a
          href="qwe"
          className={classNames('tabLink', {
            'tabLink--active': tabID === tab.id,
          })}
          onClick={event => onTabSelected(event, tab.id)}
        >
          {tab.title}
        </a>
        {tabID === tab.id && <p className="tabContent">{tab.content}</p>}
      </React.Fragment>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  tabID: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
