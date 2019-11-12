import React from 'react';
import PropTypes from 'prop-types';

function Tab({
  title, Clicked, index, disable,
}) {
  return (
    <button type="button" disabled={disable} onClick={() => (Clicked(index))}>
      {title}
    </button>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  Clicked: PropTypes.instanceOf(Function).isRequired,
  index: PropTypes.number.isRequired,
  disable: PropTypes.bool.isRequired,
};

export default Tab;
