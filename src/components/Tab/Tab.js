import React from 'react';
import PropTypes from 'prop-types';

export const Tab = (props) => {
  const { isSelected, title, onSelect } = props;

  return (
    <button
      type="button"
      className={isSelected ? ' button button--active' : 'button'}
      onClick={onSelect}
    >
      {title}
    </button>
  );
};

Tab.propTypes = {
  isSelected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  isSelected: false,
};
