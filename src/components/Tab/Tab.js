import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { TabShape } from '../shapes/TabShape';
import './Tab.scss';

export const Tab = ({ tab, switchTab, index, currentTitle }) => (
  <button
    type="button"
    className={ClassNames(
      'nav-link',
      { active: currentTitle === tab.title },
    )}
    onClick={() => switchTab(index)}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: TabShape.isRequired,
  switchTab: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentTitle: PropTypes.string.isRequired,
};
