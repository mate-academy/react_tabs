import React from 'react';
import Proptypes from 'prop-types';

export const TabItem = ({ isActive, title, onClick }) => (
  <li className={isActive ? 'is-active' : ''}>
    <a
      href="#a"
      key={title}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {title}
    </a>
  </li>
);

TabItem.propTypes = {
  isActive: Proptypes.bool.isRequired,
  title: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
