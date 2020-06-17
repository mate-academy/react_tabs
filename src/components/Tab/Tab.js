import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = props => (
  <button
    className={`tabs__button${
      props.isActive ? ' tabs__button--active' : ''
    }`}
    type="button"
    onClick={() => props.handleClick(props.children, props.title)}
  >
    {props.title}
  </button>
);

export { Tab };

Tab.defaultProps = {
  handleClick: () => 'no text',
};

Tab.defaultProps = {
  isActive: false,
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
