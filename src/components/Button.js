import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ index, title, addChange }) => (
  <div>
    <button
      className="ui primary button"
      type="button"
      onClick={() => addChange(index)}
    >
      {title}
    </button>
  </div>
);

Button.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  addChange: PropTypes.func.isRequired,
};
