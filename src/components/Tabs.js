import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export const Tabs = ({ tabs, handleClick, currentState }) => (
  tabs.map((tab, index) => (
    <div
      className={index === currentState ? 'tabs__tab--active' : 'tabs__tab'}
      key={tab.title}
      onClick={() => handleClick(index)}
      onKeyUp={() => handleClick(index)}
      role="button"
      tabIndex="0"
    >
      <Tab
        title={tab.title}
      />
    </div>
  ))
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
  handleClick: PropTypes.func.isRequired,
  currentState: PropTypes.number.isRequired,
};
