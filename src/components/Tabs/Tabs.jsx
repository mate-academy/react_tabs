import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export const Tabs = ({ tabs, activeId, chooseTab }) => (
  <>
    <div className="tab">
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            chooseTab(tab.id);
          }}
          className={classNames(
            `button`,
            { button__active: activeId === tab.id },
          )}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div>
      {tabs.find(tab => tab.id === activeId).content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  chooseTab: PropTypes.func.isRequired,
};
