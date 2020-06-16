import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = props => (
  <button
    className="tabs__button"
    type="button"
    onClick={() => props.changeContent(props.children)}
  >
    {props.title}
  </button>
);

export { Tab };

Tab.defaultProps = {
  changeContent: () => 'no text',
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  changeContent: PropTypes.func,
  children: PropTypes.string.isRequired,
};
