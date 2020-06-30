import React from 'react';
import PropType from 'prop-types';
import './Tab.css';

export const Tab = props => (
  <button className="tabs__item" onClick={props.onSelected} type="button">
    {props.children}
  </button>
);

Tab.propTypes = {
  children: PropType.string.isRequired,
  onSelected: PropType.func.isRequired,
};
