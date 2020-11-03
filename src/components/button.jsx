import React from 'react';
import PropTypes from 'prop-types';

export function Button({
  onTabSelected,
  content,
  title,
}) {
  return (
    <button
      type="button"
      className="ui top attached button"
      onClick={() => onTabSelected(content)}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
