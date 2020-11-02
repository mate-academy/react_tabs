import React from 'react';
import PropTypes from 'prop-types';
import { contentType, tabType } from '../types/TabType';

const classNames = require('classnames');

export const Tab = ({ onClick, stateActive, children, title, id }) => (
  <>
    <button
      type="button"
      href="#"
      onClick={() => {
        onClick(id, children);
      }}
      className={classNames({
        'nav-link': true,
        active: stateActive === id,
      })}
    >
      {title}
    </button>

  </>
);

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  stateActive: PropTypes.number.isRequired,
  children: contentType.isRequired,
  ...tabType,
};
