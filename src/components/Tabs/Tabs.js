import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

const Tabs = ({ children }) => (
  <ul className="App__Tabs Tabs">
    {children}
  </ul>
);

export default Tabs;

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
