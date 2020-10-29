import React from 'react';
import PropTypes from 'prop-types';
import { contentType, tabType } from '../types/TabType';

const classNames = require('classnames');

export const Tab = ({ callback, stateActive, children, title, id }) => (
  <>
    <button
      type="button"
      href="#"
      onClick={() => {
        callback(id, children);
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
  callback: PropTypes.func.isRequired,
  stateActive: PropTypes.number.isRequired,
  children: contentType.isRequired,
  ...tabType,
};
