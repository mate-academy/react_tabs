import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Tabs = ({ tabs, changeButton, textFromSelectedButton }) => (
  <>
    {tabs.map((tab) => {
      const { title } = tab;

      return (
        <button
          key={uuidv4()}
          className="App__button"
          type="button"
          value={title}
          onClick={() => changeButton(tab)}
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
  changeButton: PropTypes.func.isRequired,
  textFromSelectedButton: PropTypes.string.isRequired,
};
