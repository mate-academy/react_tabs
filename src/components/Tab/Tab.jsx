import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import classNames from 'classnames';

export const Tab = ({ tabs, switchTabs, selectedTab }) => (
  <>
    <div className="tabs">
      {tabs.map((tab) => {
        const { title, id } = tab;

        return (
          <div key={id}>
            <button
              className={classNames('btn', {
                active: selectedTab.id === id,
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
      {selectedTab.content}
    </p>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  switchTabs: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
