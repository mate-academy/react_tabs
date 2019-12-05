import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ selectedTab, title }) => (
  <button type="button" onClick={selectedTab}>{title}</button>
);

Tab.propTypes = {
  selectedTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tab;
