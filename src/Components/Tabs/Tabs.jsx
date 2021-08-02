import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = (
  {
    tabs,
    idSelectedButton,
    onTabSelected,
    textFromSelectedButton,
  },
) => (
  <>
    {tabs.map((tab) => {
      const { title } = tab;

      return (
        <button
          className={idSelectedButton === tab.id
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
      {textFromSelectedButton}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  idSelectedButton: PropTypes.string.isRequired,
  textFromSelectedButton: PropTypes.string.isRequired,
};
