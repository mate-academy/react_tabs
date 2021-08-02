import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  const { content } = selectedTab;

  return (
    <>
      {tabs.map((tab) => {
        const { title } = tab;
        const { id } = selectedTab;

        return (
          <button
            className={id === tab.id
              ? 'App__button App__button--is-selected'
              : 'App__button'
            }
            type="button"
            value={title}
            onClick={() => onTabSelected(tab)}
          >
            {title}
          </button>
        );
      })}
      <p className="App__text-block">
        {content}
      </p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
