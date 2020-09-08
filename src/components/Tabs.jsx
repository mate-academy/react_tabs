import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = ({ tabs }) => {
  const [text, textChange] = useState(tabs[0].content);

  const onTabSelected = (content) => {
    textChange(content);
  };

  return (
    <>
      <div className="buttons">
        {tabs.map(cell => (
          <button
            key={cell.title}
            type="button"
            className={classNames('cell', { active: text === cell.content })}
            onClick={() => {
              onTabSelected(cell.content);
            }}
          >
            {cell.title}
          </button>
        ))}
      </div>

      <div className="text">
        <p>
          {text}
        </p>
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
