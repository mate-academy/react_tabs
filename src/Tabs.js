import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Tabs.css';

const Tabs = ({ tabs, index, callback }) => {
  const stateIndex = index;

  return (
    <>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          onClick={() => callback(tab.id)}
          className={
            ClassNames(
              'tabButton',
              { tabButton__active: tab.id === index },
            )
          }
        >
          {tab.title}
        </button>
      ))}
      <p className="tab-text">
        {(tabs[stateIndex].id === stateIndex) ? tabs[stateIndex].content : ''}
      </p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.objectOf.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Tabs;
