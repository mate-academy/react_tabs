import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export function Tabs({ tabs, onTabSelected }) {
  return (
    <>
      {tabs.map(tab => (
        <button
          className="Tabs__button"
          type="button"
          key={tab.id}
          onClick={
            () => onTabSelected(tab.id)
          }
        >
          {tab.title}
        </button>
      ))
      }
    </>
  );
}

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
