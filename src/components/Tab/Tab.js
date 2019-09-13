import React from 'react';
import { TabProps } from '../../constants/proptypes';

import './Tab.css';

const Tab = (props) => {
  const { title, isActive, onClick } = props;
  const classNames = isActive
    ? 'tabs-list__item tabs-list__item--active'
    : 'tabs-list__item';

  return (
    <>
      <li
        className={classNames}
        key={title}
        onClick={() => onClick(title)}
      >
        {title}
      </li>
    </>
  );
};

Tab.propTypes = TabProps;

export default Tab;
