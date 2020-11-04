import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { index, title, onSelected } = props;

  return (
    <button
      className="button__text item"
      type="button"
      index={index}
      onClick={onSelected}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};
