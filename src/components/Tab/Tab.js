import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = props => (
  <button
    className={`tabs__button${
      props.isActive ? ' tabs__button--active' : ''
    }`}
    type="button"
    onFocus={() => props.onFocus(props.children, props.title)}
  >
    {props.title}
  </button>
);

export { Tab };

Tab.defaultProps = {
  isActive: false,
  onFocus: () => 0,
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onFocus: PropTypes.func,
};
