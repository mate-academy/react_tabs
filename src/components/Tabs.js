import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';

export const Tabs = ({ tabs, clickButton, active }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <Tab tab={tab} clickButton={clickButton} active={active} key={tab.title} />
    ))}
  </ul>
);

Tabs.propTypes = {
  clickButton: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
