import React from 'react';
import './Tab.css';
import PropTypes from 'prop-types';

export class Tab extends React.PureComponent {
  render() {
    const { activeClass, toggle, id } = this.props;
    const nameClass = `tabs__element ${activeClass}`;

    return (
      <li className={nameClass}>
        <button
          onClick={toggle}
          id={id}
          className="tabs__button"
          type="button"
        >
          {this.props.children}
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  activeClass: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};
