import React from 'react';
import { ShapeTab, ShapeTabDefault } from '../Shapes/ShapeTab';
import styles from './Tab.module.css';

export class Tab extends React.PureComponent {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.toggle}
        className={
          [
            styles.item,
            (this.props.toggleClass ? styles.active : ''),
          ].join(' ')
        }
      >
        {this.props.title}
      </button>
    );
  }
}

Tab.defaultProps = ShapeTabDefault;

Tab.propTypes = ShapeTab.isRequired;
