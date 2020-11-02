import React from 'react';
import PropTypes from 'prop-types';

import './Tab.css';
import { TabShape } from '../shapes/TabShape';

export const Tab = ({ tab, isTabActive, onTabSelected }) => (
  <button
    type="button"
    className={`tab ${isTabActive ? 'tab--is-active' : ''}`}
    onClick={onTabSelected}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: TabShape.isRequired,
  isTabActive: PropTypes.bool.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
