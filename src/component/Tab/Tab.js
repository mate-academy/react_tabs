import React from 'react';
import { tabListProps } from '../PropTypes/PropTypes';
import './Tab.css';

const Tab = ({
  handler, title, isActive, index,
}) => (
  <button
    type="button"
    onClick={handler}
    className={
      isActive === index
        ? 'button-active'
        : 'button'
    }
  >
    {title}
  </button>
);

Tab.propTypes = tabListProps;

export default Tab;
