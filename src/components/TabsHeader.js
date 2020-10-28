import React from 'react';
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
              className={
                `nav-link cursor-p ${tab.index === currentIndex
                  ? 'active'
                  : ''}`
              }
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
  tabs: PropTypes.arrayOf(TabShape).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};
