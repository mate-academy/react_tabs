import React from 'react';
import './ButtonsList.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ButtonsList = ({ tabs, chooseContent, activeId }) => (
  <ul
    className="ButtonsList"
  >
    {tabs.map(tab => (
      <li
        key={tab.id}
        className="ButtonsList__item"
      >

        <button
          id={tab.id}
          type="button"
          className={classNames(`ButtonsList__button`,
            {
              'ButtonsList__button--active': tab.id === activeId,
            })
        }
          onClick={chooseContent}
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);

ButtonsList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  chooseContent: PropTypes.func.isRequired,
  activeId: PropTypes.string.isRequired,
};
