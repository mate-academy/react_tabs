import PropType from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './Tab.module.css';

export class Tab extends PureComponent {
  render() {
    return (
      <button
        type="button"
        className={styles.header}
        onClick={() => this.props.onClick(this.props.index)}
      >
        {this.props.name}
      </button>
    );
  }
}

Tab.propTypes = {
  name: PropType.string.isRequired,
  index: PropType.number.isRequired,
  onClick: PropType.func.isRequired,
};
