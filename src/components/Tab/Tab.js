import PropType from 'prop-types';
import React from 'react';
import styles from './Tab.module.css';

export const Tab = ({ onClick, index, isActive, name, onFocus }) => (
  <button
    type="button"
    className={isActive ? `${styles.active}  ${styles.header}` : styles.header}
    onClick={() => onClick(index)}
    onFocus={() => onFocus(index)}
  >
    {name}
  </button>
);

Tab.propTypes = {
  name: PropType.string.isRequired,
  index: PropType.number.isRequired,
  onClick: PropType.func.isRequired,
  onFocus: PropType.func.isRequired,
  isActive: PropType.bool.isRequired,
};
