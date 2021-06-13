import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Tab.scss';

export const Tab = ({ title, selectedTab, onClick }) => (
  <button
    type="button"
    className={classNames(
      'tab',
      { 'tab--is-active': selectedTab === title },
    )}
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
