import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.module.css';

export class Tab extends React.PureComponent {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.toggle}
        className={styles.item}
      >
        {this.props.title}
      </button>
    );
  }
}

Tab.defaultProps = {
  toggle: () => '',
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func,
};
