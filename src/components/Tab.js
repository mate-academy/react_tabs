import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
import classNames from 'classnames';

const Tab = ({ title, click, id, active }) => (
  <button
    type="button"
    className={classNames('tab__item', { 'tab__item--active': active === id })}
    onClick={() => (
      click(id)
    )}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};

export default Tab;
