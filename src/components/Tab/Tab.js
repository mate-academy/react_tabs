import React from 'react';
import { TabTypes } from './TabTypes';

import './Tab.css';

export const Tab = ({ children }) => (
  <div className="content">
    <p>{children}</p>
  </div>
);

Tab.propTypes = TabTypes;
