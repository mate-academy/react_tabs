import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';

export const Tab = ({ title, selectedTab, onClick }) => (
  <button
    type="button"
    className={selectedTab === title ? 'tab tab--is-active' : 'tab'}
    onClick={onClick}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
