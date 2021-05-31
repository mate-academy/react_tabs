import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = ({ tabs, value, onChange }) => (
  <>
    <h1 className="title">
      Selected tab is&nbsp;
      {value.title}
    </h1>
    <nav className="nav">
      <ul className="nav__list">
        {tabs.map(tab => (
          // eslint-disable-next-line max-len
          /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
          <li
            key={tab.id}
            className={classNames('nav__link', { active: value.id === tab.id })}
            onClick={() => {
              onChange(tab.id);
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </nav>
    <div className="content">{value.content}</div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
