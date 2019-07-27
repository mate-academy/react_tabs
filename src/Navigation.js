import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Navigation = ({tabs, activeId, clickTab}) => (
  <nav>
  <ul>
    {tabs.map(tab => (
      <Tab tab ={tab} id={tab.id} activeId={activeId} clickTab={clickTab}/>
    ))}
  </ul>
</nav>
)

export default Navigation;
