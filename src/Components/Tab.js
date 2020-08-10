import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => (
  <button
    type="button"
    onClick={props.onTabSelected}
    className={props.active ? 'tabs__button active' : 'tabs__button'}
  >
    {props.title}
  </button>
);

export default Tab;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func,
  active: PropTypes.bool.isRequired,
};

Tab.defaultProps = {
  onTabSelected: () => {},
};
