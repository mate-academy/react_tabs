import React from 'react';
import { PropForTab } from './ProrTypes';

export const Tab = ({ tab, toggle, active }) => (
  <li className={active === tab.id ? 'tabs__item--active' : ''}>
    <button type="button" className="toggle" onClick={() => toggle(tab.id)}>
      {tab.title}
    </button>
  </li>
);

Tab.propTypes = PropForTab;
