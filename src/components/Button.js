import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ title, selectedTab, index }) {
  return (
    <button
      type="button"
      onClick={() => selectedTab(index)}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  selectedTab: PropTypes.func.isRequired,
};
