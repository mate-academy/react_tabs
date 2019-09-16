import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tab.css';

const Tab = ({ title, tabFunc, activeTab }) => (
  <button
    type="submit"
    onClick={() => tabFunc(title)}
    className={classNames('tab', { 'tab--is-active': activeTab === title })}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  tabFunc: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
