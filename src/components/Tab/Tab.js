import React from 'react';
import classNames from 'classnames';
import { TabProps } from '../../constants/proptypes';

import './Tab.css';

const Tab = ({ title, isActive, onClick }) => {
  const classes = classNames({
    'tabs-list__item': true,
    'tabs-list__item--active': isActive,
  });

  return (
    <li
      className={classes}
      key={title}
      onClick={() => onClick(title)}
    >
      {title}
    </li>
  );
};

Tab.propTypes = TabProps;

export default Tab;
