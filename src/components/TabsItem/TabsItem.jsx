import React from 'react';
import PropTypes from 'prop-types';
import * as cx from 'classnames';

export const TabsItem = ({ title, isActive, handleTabs }) => (
  <li className="nav-item">
    <button
      type="button"
      onClick={handleTabs}
      className={cx(`nav-link`, { active: isActive })}
    >
      {title}
    </button>
  </li>
);

TabsItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleTabs: PropTypes.func.isRequired,
};
