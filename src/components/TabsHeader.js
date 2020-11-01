import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { TabShape } from './shapes/TabShape';

export const TabsHeader = ({ tabs, currentIndex, onSelect }) => (
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      {
        tabs.map(tab => (
          <li key={tab.index} className="nav-item">
            <button
              type="button"
              className={ClassNames('nav-link', 'cursor-p', {
                active: tab.index === currentIndex,
              })}
              style={{ outline: 'none' }}
              onClick={() => onSelect(tab.index)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </ul>
  </div>
);

TabsHeader.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(TabShape)).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
