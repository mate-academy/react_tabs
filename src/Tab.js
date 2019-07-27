import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({tab, activeId, clickTab}) => (
  <li className={(tab.id === activeId) && 'active-tab'}>
    <a
      href={`#${tab.title}`}
      onClick={() => clickTab(tab.id)}
      className={(tab.id === activeId) && 'active-link'}
    >
      {tab.title}
    </a>
  </li>
)

export default Tab;
