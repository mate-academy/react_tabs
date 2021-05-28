import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tab.css';

const Tab = ({ tabs, onclick, activeTab }) => (
  <div className="app__control">
    {tabs.map(tab => (
      <button
        className={classNames('btn', { active: activeTab.title === tab.title })}
        key={tab.id}
        type="button"
        onClick={() => onclick(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>

);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onclick: PropTypes.func.isRequired,
  activeTab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tab;
