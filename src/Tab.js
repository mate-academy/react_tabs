import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ clickHandler, index, isActive, children }) => (
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

Tab.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  clickHandler: PropTypes.func.isRequired,
  isActive: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

Tab.defaultProps = { children: null };

export default Tab;
