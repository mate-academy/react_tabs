import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tab.css';

const Tab = ({ tabs, handlerClick, activeTab }) => (
  <>
    <h1>
      {`Selected tab is ${activeTab.title}`}
    </h1>
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
    <p>
      {activeTab.content}
    </p>
  </>

);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  handlerClick: PropTypes.func.isRequired,
  activeTab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tab;
