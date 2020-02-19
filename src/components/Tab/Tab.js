import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

function Tab(props) {
  const { clickHandler, index, isActive, children } = props;

  return (
    <li>
      <button
        type="button"
        onClick={clickHandler}
        className={
          index === isActive
            ? 'button_active'
            : 'button'}
      >
        {children}
      </button>
    </li>
  );
}

Tab.defaultProps = { children: null };

Tab.propTypes = {
  children: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
