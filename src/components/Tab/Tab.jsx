import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

export const Tab = ({ tabs, active, handlerOnClick }) => {

  return (
    <div className="container">
      {tabs.map(tab => (
        <button
          type="button"
          onClick={() => {
            handlerOnClick(tab.title);
          }}
          className={active === tab.title ? 'active' : ''}
        >
          {tab.title}
        </button>
      ))}
      <div className="content">
        {tabs.filter(tab => tab.title === active)
          .map(tab => <p>{tab.content}</p>
          )}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handlerOnClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
