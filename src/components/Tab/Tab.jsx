import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import classNames from 'classnames';

export const Tab = ({ tabs, switchTabs, selectedTabId }) => (
  <>
    <div className="tabs">
      {tabs.map((tab) => {
        const { title, id } = tab;

        return (
          <div key={id}>
            <button
              className={classNames('btn', {
                active: selectedTabId === id,
              })}
              type="button"
              onClick={() => switchTabs(id)}
            >
              {title}
            </button>
          </div>
        );
      })}
    </div>
    <p>
      {(tabs.find(tab => tab.id === selectedTabId)).content}
    </p>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  switchTabs: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
