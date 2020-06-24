import PropType from 'prop-types';
import React from 'react';
import styles from './Tab.module.css';

export const Tab = props => (
  <button
    type="button"
    className={styles.header}
    onClick={() => props.onClick(props.index)}
  >
    {props.name}
  </button>
);

Tab.propTypes = {
  name: PropType.string.isRequired,
  index: PropType.number.isRequired,
  onClick: PropType.func.isRequired,
};
